webpackJsonp([5],{141:function(M,N,D){"use strict";function j(M){D(201)}Object.defineProperty(N,"__esModule",{value:!0});var z=D(166),c=D(202),i=D(21),g=j,t=i(z.a,c.a,!1,g,"data-v-e093f95c",null);N.default=t.exports},166:function(M,N,D){"use strict";function j(M){M.syncPlansOnce(function(N){if(N)return M.loaderVisible=!1,alert("有些记录未同步成功，登出会丢失记录。"),void M.startSyncTimer();M.$http.delete(t).then(function(N){200===N.status&&(M.loaderVisible=!1,M.clear(),Object(g.a)(""),M.$router.push("/"))})})}var z=D(62),c=D.n(z),i=D(35),g=D(63),t="/api/user/token";N.a={name:"setting",data:function(){return{loaderVisible:!1}},computed:c()({},Object(i.e)(["user","queueIsRunning"])),methods:c()({logout:function(){var M=this;if(this.loaderVisible=!0,this.stopSyncTimer(),this.queueIsRunning)var N=setInterval(function(){M.queueIsRunning||(clearInterval(N),j(M))});else j(M)}},Object(i.d)(["clear"]),Object(i.b)(["syncPlansOnce","stopSyncTimer","startSyncTimer"]))}},201:function(M,N){},202:function(M,N,D){"use strict";var j=function(){var M=this,N=M.$createElement,j=M._self._c||N;return j("main",[j("header",{staticClass:"header"},[j("div",{staticClass:"l-box-shadow l-grid"},[j("router-link",{staticClass:"l-header__side l-grid__item--1",attrs:{to:"/home"}},[j("img",{staticClass:"response-img",attrs:{src:D(167),alt:"返回"}})]),M._v(" "),j("h1",{staticClass:"header__center l-grid__item--8"},[M._v("设置")])],1)]),M._v(" "),j("div",{staticClass:"content"},[j("section",{staticClass:"c-info"},[j("img",{staticClass:"c-info__avatar",attrs:{src:D(203),alt:"默认头像：富贵儿与少奶奶"}}),M._v(" "),j("p",[M._v(M._s(M.user.nickname))]),M._v(" "),j("p",[M._v(M._s(M.user.email))])]),M._v(" "),j("section",{staticClass:"c-list"},[j("div",{staticClass:"c-list__item l-grid",on:{click:M.logout}},[M._m(0),M._v(" "),j("span",{staticClass:"c-list__content l-grid__item l-grid__item--8"},[M._v("登出")])])]),M._v(" "),j("div",{directives:[{name:"show",rawName:"v-show",value:M.loaderVisible,expression:"loaderVisible"}],staticClass:"c-loader l-loader"},[M._m(1),M._v(" "),j("p",[M._v("正在登出，我们会同步你最后的更改...")])])])])},z=[function(){var M=this,N=M.$createElement,j=M._self._c||N;return j("span",{staticClass:"c-list__icon"},[j("img",{staticClass:"response-img",attrs:{src:D(204),alt:"登出"}})])},function(){var M=this,N=M.$createElement,D=M._self._c||N;return D("div",{staticClass:"c-loader__content pacman"},[D("div"),M._v(" "),D("div"),M._v(" "),D("div"),M._v(" "),D("div"),M._v(" "),D("div")])}],c={render:j,staticRenderFns:z};N.a=c},203:function(M,N,D){M.exports=D.p+"images/avatar_default.jpg"},204:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk4NTUyMzk5ODE0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwOTMgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzNzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzQuMTU2MjUiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwODIuOTcxNTg3IDQzNC44MjM0NDFDMTA5My45NjYxMTEgNDIzLjkyMTI1NCAxMDkzLjk2NjExMSA0MDYuMTkzNzY2IDEwODIuOTcxNTg3IDM5NS4yODc0ODRMOTEzLjc1MzEyMiAyMjcuNTE2Njg5QzkwOC4yMjgzMjEgMjIyLjA4Njc1OCA5MDEuMDA0MjEzIDIxOS4zNTA2MyA4OTMuNzg1NjE0IDIxOS4zNTA2MyA4ODYuNTY3MDE0IDIxOS4zNTA2MyA4NzkuMzQ3MDM2IDIyMi4wMzM1MSA4NzMuODE4MTA1IDIyNy41MTY2ODkgODYyLjgyMjIwMiAyMzguNDE3NTEgODYyLjgyMjIwMiAyNTYuMTQ0OTk4IDg3My44MTgxMDUgMjY3LjA1MjY0Nkw5OTQuODY1Mjg5IDM4Ny4wNjI3MTYgNjM5LjkwOTA0IDM4Ny4wNjI3MTZDNjI0LjM0MjY0MyAzODcuMDYyNzE2IDYxMS43MDY2NTIgMzk5LjU5MTAxNCA2MTEuNzA2NjUyIDQxNS4wMjYxMDggNjExLjcwNjY1MiA0MzAuNDU5ODM2IDYyNC4zNDI2NDMgNDQyLjk4ODEzNCA2MzkuOTA5MDQgNDQyLjk4ODEzNEw5OTQuODY1Mjg5IDQ0Mi45ODgxMzQgODczLjgxODEwNSA1NjMuMDAzNjY1Qzg2Mi44MjIyMDIgNTczLjkwNTg1MiA4NjIuODIyMjAyIDU5MS42MzMzNCA4NzMuODE4MTA1IDYwMi41Mzk2MjIgODg0LjgxODEzOCA2MTMuNDQ3MjcgOTAyLjY5ODAxMSA2MTMuNDQ3MjcgOTEzLjY5OTQxNyA2MDIuNTM5NjIyTDEwODIuOTEyMzcyIDQzNC43NzAxOTMgMTA4Mi45NzE1ODcgNDM0LjgyMzQ0MVpNODcuMzc3MjQ0IDBDMzkuMTk5MzY5IDAgMCAzOC4yNTI4OTMgMCA4NS4yNTg5NzhMMCA3NjcuMzA3MjA5QzAgODA5LjcwNjM1MyAzMS4yNzc1NzUgODU1Ljk3NTYwOCA3MS4xODIzNjcgODcyLjY4MTMyOUwzNzEuODk0ODAxIDk5OC40MDc4NTdDMzgyLjI2MTQgMTAwMi43Mjc1NjEgMzkyLjgwNTc3NyAxMDA0Ljg4NTMzMyA0MDIuODgzNjY0IDEwMDQuODg1MzMzIDQxNS4yOTU0MjIgMTAwNC44ODUzMzMgNDI3LjA2MTQ5MSAxMDAxLjU4OTcwNSA0MzcuMTk0ODQ1IDk5NS4xMTIyMyA0NTUuNTQ0Mzk0IDk4My4zNDUwOTcgNDY2LjAzMzMwNCA5NjIuNDI2NTI1IDQ2Ni4wMzMzMDQgOTM3LjgxODIyOEw0NjYuMDMzMzA0IDg1Mi41NjA2NDMgNjExLjY2NzczMyA4NTIuNTYwNjQzQzY1OS44NDU2MDkgODUyLjU2MDY0MyA2OTkuMDUwNjY3IDgxNC4zMDc3NDQgNjk5LjA1MDY2NyA3NjcuMzA3MjA5TDY5OS4wNTA2NjcgNTk2Ljc5MDY0NEM2OTkuMDUwNjY3IDU4MS4xMDQ4MzUgNjg2LjAwMDMyNiA1NjguMzc3NDYxIDY2OS45MjM0OTcgNTY4LjM3NzQ2MSA2NTMuODQ1MjQxIDU2OC4zNzc0NjEgNjQwLjc5NDkwNCA1ODEuMTA0ODM1IDY0MC43OTQ5MDQgNTk2Ljc5MDY0NEw2NDAuNzk0OTA0IDc2Ny4zMDcyMDlDNjQwLjc5NDkwNCA3ODIuOTk0NDEyIDYyNy43NDU5ODggNzk1LjcyNzMzMyA2MTEuNjY3NzMzIDc5NS43MjczMzNMNDY2LjAzMzMwNCA3OTUuNzI3MzMzIDQ2Ni4wMzMzMDQgMjU1Ljc2OTk5NkM0NjYuMDMzMzA0IDIxMy40MjQ5NzIgNDM0Ljc1MDA0IDE2Ny4xNjEyNzEgMzk0Ljg0NTI0NyAxNTAuNDUwMDAxTDE3MS4wMzM5NDggNTYuODM4ODU2IDYxMS42Njc3MzMgNTYuODM4ODU2QzYyNy43NDU5ODggNTYuODM4ODU2IDY0MC43OTQ5MDQgNjkuNTcxNzgxIDY0MC43OTQ5MDQgODUuMjU4OTc4TDY0MC43OTQ5MDQgMjU1Ljc2OTk5NkM2NDAuNzk0OTA0IDI3MS40NTU4MDUgNjUzLjg0NTI0MSAyODQuMTg4NzMgNjY5LjkyMzQ5NyAyODQuMTg4NzMgNjg2LjAwMDMyNiAyODQuMTg4NzMgNjk5LjA1MDY2NyAyNzEuNDU1ODA1IDY5OS4wNTA2NjcgMjU1Ljc2OTk5Nkw2OTkuMDUwNjY3IDg1LjI1ODk3OEM2OTkuMDUwNjY3IDM4LjI1Mjg5MyA2NTkuODQ1NjA5IDAgNjExLjY2NzczMyAwTDg3LjM3NzI0NCAwWk01OC4yNTAwNzQgNzY3LjMwNzIwOSA1OC4yNTAwNzQgODUuMjU4OTc4QzU4LjI1MDA3NCA4MC43NjQ0MzMgNTkuMjk5Njc2IDc2LjUwNDM5OSA2MS4yMjI1MjUgNzIuNzUzNjI1TDM3MS44OTQ4MDEgMjAyLjY4MTkxM0MzOTAuNjUxMTA2IDIxMC41MjQ4MTggNDA3Ljc3NzU0MSAyMzUuODE3MjE0IDQwNy43Nzc1NDEgMjU1Ljc2OTk5Nkw0MDcuNzc3NTQxIDkzNy44MTgyMjhDNDA3Ljc3NzU0MSA5NDMuNzMyMzI2IDQwNi4yMDU5ODIgOTQ3LjAyNzk1NCA0MDUuMTU2MzggOTQ3LjY1MTAwNCA0MDQuMTA1MzU1IDk0OC4yNzQwNDYgNDAwLjQzODg1OSA5NDguNDQ3NTA1IDM5NC44NDUyNDcgOTQ2LjExNzY2Nkw5NC4xMzg1MDIgODIwLjM4OTc0NUM3NS4zNzc5MzEgODEyLjU0Njg0IDU4LjI1MDA3NCA3ODcuMjU0NDQzIDU4LjI1MDA3NCA3NjcuMzA3MjA5WiIgcC1pZD0iMjM3OSIgZmlsbD0iIzhhOGE4YSI+PC9wYXRoPjwvc3ZnPg=="}});