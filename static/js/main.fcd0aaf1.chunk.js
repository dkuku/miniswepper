(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),u=(n(22),n(8)),c=n(9),l=n(13),s=n(10),d=n(14),m=n(1),h=n(2);function f(){var e=Object(m.a)(["\nbackground: ",";\nborder: 1px solid black;\nfloat: left;\nfont-size:30px;\ntext-align: center;\nheight: 40px;\nwidth: 40px;\n"]);return f=function(){return e},e}var v=h.a.div(f(),function(e){return e.background});v.defaultProps={background:"lightgrey"};var b=function(e){return e.open?e.bomb?a.a.createElement(v,null,a.a.createElement("span",{role:"img","aria-label":"bomb"},"\ud83d\udca3")):"0"===e.open?a.a.createElement(v,null):a.a.createElement(v,null,e.open):a.a.createElement(v,{background:"grey",onClick:function(){return e.reveal(e.position)}})};function p(){var e=Object(m.a)(["clear: both;"]);return p=function(){return e},e}var g=h.a.div(p()),y=function(e){return a.a.createElement("div",null,e.row.map(function(t,n){return a.a.createElement(b,Object.assign({},t,{reveal:e.reveal,key:n}))}),a.a.createElement(g,null))};function w(){var e=Object(m.a)(["\n  background: yellow;\n  text-align: center;\n  width:100%;\n"]);return w=function(){return e},e}function k(){var e=Object(m.a)(["\n  max-width: 1200px;\n"]);return k=function(){return e},e}var E=h.a.div(k()),F=h.a.p(w()),S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={board:[[]],width:10,height:10,chance:10},n.newGame=function(){n.setState(function(e){return{emptyFields:e.width*e.height}},function(){n.setState({gameState:"playing",board:n.genBoard(n.state.width,n.state.height,n.state.chance)})})},n.checkField=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.board,r=e[0],a=e[1];if(n.setState(function(e){return 1===e.emptyFields?{emptyFields:e.emptyFields-1,gameState:"Won"}:{emptyFields:e.emptyFields-1}}),t[r][a].open)return t[r][a].open;var o=n.countBombs(e,t);return t[r][a].open=o,t},n.revealField=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.board,r=e[0],a=e[1];(t=n.checkField(e,t))[r][a].bomb&&n.revealBoard("lost"),"0"===t[r][a].open&&n.openNeighbours(e,t),n.setState(function(e){return{board:t,counter:e.counter+1}})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.newGame()}},{key:"revealBoard",value:function(e){var t=this;this.setState(function(n){return{gameState:e,board:n.board.map(function(e){return e.map(function(e){return e.open=t.countBombs(e.position,n.board)})})}})}},{key:"openNeighbours",value:function(e,t){for(var n=e[0],r=e[1],a=n-1;a<=n+1;a++)for(var o=r-1;o<=r+1;o++)0<=a&&a<this.state.width&&0<=o&&o<this.state.height&&(t[a][o].open||this.revealField([a,o],t))}},{key:"countBombs",value:function(e,t){var n=e[0],r=e[1];if(t[n][r].bomb)return!0;for(var a=0,o=n-1;o<=n+1;o++)for(var i=r-1;i<=r+1;i++)0<=o&&o<this.state.width&&0<=i&&i<this.state.height&&t[o][i].bomb&&a++;return a.toString()}},{key:"genField",value:function(e,t,n){var r=Math.random()<n/100;return r&&this.setState(function(e){return{emptyFields:e.emptyFields-1}}),{bomb:r,open:!1,position:[e,t]}}},{key:"genBoard",value:function(e,t,n){var r=this;return Array.from(Array(e),function(e,a){return Array.from(Array(t),function(e,t){return r.genField(a,t,n)})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.board,r=t.emptyFields,o=t.gameState;return a.a.createElement(E,null,a.a.createElement(F,null,"To go: ",r," fields"),"playing"===o?a.a.createElement("div",null):a.a.createElement("div",null,a.a.createElement("h1",null,o),a.a.createElement("button",{onClick:this.newGame},"new game")),n.map(function(t,n){return a.a.createElement(y,{row:t,key:n,reveal:e.revealField})}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.fcd0aaf1.chunk.js.map