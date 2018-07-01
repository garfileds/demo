const fs = require('fs');
const url = require('url');
const path = require('path');
const utils = require('./utils');

module.exports = function (request, response, next) {
  let pathname = url.parse(request.url).pathname;
  let realpath = path.join("public", path.normalize(pathname.replace(/\.\./g, "")))
  const extMap = ['.mp4', '.mov', '.ogg']
  let ext = path.extname(realpath)

  if (extMap.indexOf(ext) === -1) return next()

  ext = ext.slice(1)
  let contentType = `video/${ext}`
  fs.exists(realpath, function(exists) {
    if (!exists) {
      response.writeHead(404, {
        'Content-Type': 'text/plain'
      })

      response.write("This request URL " + pathname + "was not found on this server");

      response.end();
    } else {
      response.setHeader("Content-Type",contentType);
      let stats = fs.statSync(realpath);
      if (request.headers["range"]) {
        console.log(request.headers["range"])
        let range = utils.parseRange(request.headers["range"], stats.size);
        console.log(range)
        if (range) {
          response.setHeader("Content-Range", "bytes " + range.start + "-" + range.end + "/" + stats.size);
          response.setHeader("Content-Length", (range.end - range.start + 1));
          let stream = fs.createReadStream(realpath, {
            "start": range.start,
            "end": range.end
          });

          response.writeHead('206', "Partial Content");
          stream.pipe(response);
        } else {
          response.removeHeader("Content-Length");
          response.writeHead(416, "Request Range Not Satisfiable");
          response.end();
        }
      } else {
        let stream = fs.createReadStream(realpath);
        response.writeHead('200', "Partial Content");
        stream.pipe(response);
      }

    }
  })
}
