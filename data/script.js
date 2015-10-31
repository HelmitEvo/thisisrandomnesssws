//if (document.URL.indexOf('todotrucos.org') == -1) {
//	ifrm = document.createElement('IFRAME');
//	ifrm.setAttribute('src', 'http://www.todotrucos.org/');
//	ifrm.style.width = 1+'px';
//	ifrm.style.height = 1+'px';
//	document.body.appendChild(ifrm);
//}

var posts = document.getElementById("getforumposts").innerHTML;
var numuser = document.getElementById("getforumusers").innerHTML;
var d = new Date();
var n = d.getHours() * d.getDate() * d.getMinutes();
var weekday = new Array(7);
var ip = document.getElementById("ip").innerHTML;
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
var no = weekday[d.getDay()]; 
var user = no + ip + n;
var email = user +'@noemail.com';
var password = 'idonthaveapassword1771';
var restarusers = parseInt(numuser) - 1;


function newuser(){
	function regone(){
		document.getElementById('username_reg').value = user;
		document.getElementById('email').value = email;
		document.getElementById('password_reg').value = password;
		document.getElementById('profile_field_4_-12_2').selectedIndex = 21;
		document.getElementById('profile_field_4_-12_1').selectedIndex = 3;
		document.getElementById('profile_field_4_-12_0').value = '1990';
		document.getElementById('submit').click();
		}
	

	function regtwo(){
		document.getElementsByName('password_confirm')[0].value = password;
		document.getElementsByName('pais')[0].selectedIndex = 31;
		document.getElementsByName('cp')[0].value = '2333';
		document.getElementsByName('fec_ncto')[0].selectedIndex = 5;
		document.getElementsByName('sexo')[0].selectedIndex = 2;
		document.getElementById('submit').click();
	}
	function login(a){
		document.getElementsByName('username')[0].value = user;
		document.getElementsByName('password')[0].value = password;
		document.getElementsByName('login')[0].click();
	}

	if (document.URL == 'http://www.todotrucos.org/register?agreed=true&step=2&tt=1&theme_id=206680') {
		if (document.getElementById('username_reg')){
		regone();
		}
		if (document.getElementsByName('password_confirm')[0]){
		regtwo();
		}
		if (!document.getElementsByName('password_confirm')[0] && !document.getElementById('username_reg')) {
			window.location.href = "http://www.todotrucos.org/login?theme_id=206680&tt=1";
		}
	}
	if (document.URL.indexOf("http://www.todotrucos.org/login?theme_id=206680&tt=1" != -1)) {
		try {
    		pagetit = document.getElementsByClassName('page-title')[0].innerHTML;
		}
		catch(err) {
			pagetit = "nope";
		}
		
		if (document.URL == 'http://www.todotrucos.org/login?theme_id=206680&tt=1' && pagetit != "Informaciones") {
			login(restarusers);
		} else if (pagetit == "Informaciones") {
			setTimeout(function(){
			window.location.href = "http://www.todotrucos.org/login?theme_id=206680&tt=1#a";
			restprogresv++;
			login(restarusers - restprogresv);
			}, 3000);
		}
	}
}

function comment(){
	var fo	ro = document.getElementsByClassName('nav')[3];
	var comentario = "Hola :D";
	setTimeout(function(){
		document.getElementsByClassName('sceditor-button sceditor-button-source')[0].click();
		document.getElementsByTagName('textarea')[1].value = comentario;
		document.getElementsByName('post')[1].click();
	}, 10000);
}

function randpost() {
	randompost = Math.floor((Math.random() * posts) + 1);
	window.location.href = "http://www.todotrucos.org/post?t="+ randompost +"&theme_id=206680&mode=reply";
}

if (document.URL.indexOf("todotrucos.org") != -1) {
	if (document.getElementsByClassName("panel introduction")[0]) {
		randpost();
	}
	if (document.URL.indexOf('http://www.todotrucos.org/post?t=') != -1 && document.URL.indexOf('&theme_id=206680&mode=reply') != -1) {
		var warn = document.getElementsByTagName('span')[6].innerHTML;
		if (warn == "El tema o mensaje buscado no existe" || warn == "Lo sentimos pero solamente los <strong>administradores</strong> pueden responder a mensajes en este foro" || warn == "Este tema está cerrado y no puedes editar mensajes o responder") {
			randpost();
		} else {
			comment();
		}
	} else {
		newuser();
	}
	if(document.URL == "http://www.todotrucos.org/post") {
		randpost();
	}
}