let sideNavOpen = false;

/* Side Menu */

function initToggleNav() {
	document.querySelector("#toggleButton").onclick = this.toggleNav;
	document.querySelector("#toggleButton").textContent = ">" ;
}

function toggleNav() {

	if( sideNavOpen ){
		document.querySelector("aside").style.width = "0";
		document.querySelector(".content").style.marginLeft = "0";
		document.querySelector("#toggleButton").textContent = ">" ; //&omicron;
	}else{
		document.querySelector("aside").style.width = "100%";
		document.querySelector(".content").style.marginLeft = "20rem";
		document.querySelector("#toggleButton").textContent = "×" ; //&times;
	}

	sideNavOpen = !sideNavOpen;

}

/* Cookie Jar */

let audio = null;
let eatingCookie = false;

function initCookieJar() {
	audio = document.querySelector("#cookieAudio");
	document.querySelector(".cookie-jar").onclick = this.eatCookie;
}

function eatCookie() {
	if( !eatingCookie ){
		setTimeout( function() { audio.play(); }, 400);
		setTimeout( function() { document.querySelector(".cookie-jar").blur(); eatingCookie = false; }, 1400);
		eatingCookie = true;
	}
}

/* Initialize Methods */

window.onload = function() {
	initToggleNav();
	initCookieJar();
};
