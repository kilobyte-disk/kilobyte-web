function LoadNavmenu()
{
	var navmenu = document.getElementById("navmenu");

	navmenu.innerHTML = `
	    <p class="navp">
	    <a class="navlink" href="/page/home.html">/home/kilo</a>
	    &nbsp; 
	    <a class="navlink" href="/page/blog.html">~/blog</a>
		&nbsp;
		<a class="navlink" href="/page/museum.html">~/museum</a>
	    </p>
	`;
}

export { LoadNavmenu };
