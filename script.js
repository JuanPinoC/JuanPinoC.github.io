let sideNavOpen = false;

/* Side Menu */

function initToggleNav(){
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

window.onload = function() {
	initToggleNav();
};

