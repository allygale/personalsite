

var allygale = document.querySelector("#allygale");
var interests = document.querySelector("#interests");
var projects = document.querySelector("#projects");
var blog = document.querySelector("#blog");

function hidePages() {
	var pages = Array.prototype.slice.call(document.querySelectorAll(".contentPage"), 0);
	pages.map(function(e) {e.style.display="none"});
}

allygale.onclick = function(e) {
	hidePages();
	allygalePage.style.display="block";
}

interests.onclick = function(e) {
	hidePages();
	interestsPage.style.display="block";
}

projects.onclick = function(e) {
	hidePages();
	projectsPage.style.display="block";
}

blog.onclick = function(e) {
	hidePages();
	blogPage.style.display="block";
}
