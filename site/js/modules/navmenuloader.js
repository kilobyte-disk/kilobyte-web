function LoadNavmenu()
{
	var navmenu = document.getElementById("navmenu");

	navmenu.innerHTML = `
	    <p class="navp">
	    <a class="navlink" href="./home.html">HOME</a>
	    &nbsp; 
	    <a class="navlink" href="./about.html">ABOUT</a>
	    &nbsp;
	    <a class="navlink" href="./blog.html">BLOG</a>
	    </p>
	`;
}

export { LoadNavmenu };
