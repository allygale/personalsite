var blogLoaded = false;
var blogTitles = ["happy", "sad"];

function loadBlog() {
	var xhReq = new XMLHttpRequest();
	for (i=0; i<blogTitles.length;i++){
		xhReq.open("GET", "/posts/" + blogTitles[i] + ".txt", false);
		xhReq.onreadystatechange = function() {
 		//markdown.toHTML(input.value);
 			if (xhReq.readyState == XMLHttpRequest.DONE && xhReq.status == 200) {
 				var blogContent = document.querySelector("#blogContent");
 				//blogContent.innerHTML = currentContent + markdown.toHTML(xhReq.responseText);
 				var newContent = document.createElement('div');
 				newContent.innerHTML = markdown.toHTML(xhReq.responseText);
 				// Making sure to append all items in the div
 				blogContent.appendChild(newContent);
 				
 			}
 		};
 		xhReq.send();
	}
 	blogLoaded = true;
}

var allygale = document.querySelector("#allygale");
var interests = document.querySelector("#interests");
var projects = document.querySelector("#projects");
var blog = document.querySelector("#blog");
var contact = document.querySelector("#contact");

function hidePages() {
	var pages = Array.prototype.slice.call(document.querySelectorAll(".contentPage"), 0);
	pages.map(function(e) {e.style.display="none"});
}

// allygale.onclick = function(e) {
// 	hidePages();
// 	allygalePage.style.display="block";
// }

interests.onclick = function(e) {
	hidePages();
	interestsPage.style.display="block";
}

projects.onclick = function(e) {
	hidePages();
	projectsPage.style.display="block";
}

contact.onclick = function(e) {
	hidePages();
	contactPage.style.display="block";
}

blog.onclick = function(e) {
	hidePages();
	blogPage.style.display="block";
	if (!blogLoaded) {
		console.log(blogLoaded);
		loadBlog();
	}
	console.log(blogLoaded);
}
