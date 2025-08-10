import { LoadNavmenu } from "./navmenuloader.js"
import { LoadFoot } from "./footloader.js"

var TW_SPEED = 50;
var UPDATE_SPEED = 1;

/* Kind of spaghetti, leaving these out here so the repeating
 * functions can access them without much difficulty */
var opacity = 0;
var width = 90;
var height = 90;
var goal_opacity = 1;
var goal_width = 100;
var goal_height = 100;

var i = 0;
var title = "";

function TypeTitle()
{
	if (i < title.length) {
		document.getElementById("pagetitle").innerHTML += title.charAt(i);

    		i++;
    		setTimeout(TypeTitle, TW_SPEED);
	}
}

function ShowMainPage()
{
	var mainpage = document.getElementById("maincontent");

	opacity += (goal_opacity - opacity) * 0.05;
	width += (goal_width - width) * 0.05;
	height += (goal_height - height) * 0.05;

	mainpage.style.opacity = opacity;
	mainpage.style.width = width + "%";
	mainpage.style.height = height + "%";

	/* Stop when finished. */
	if ((Math.round(opacity) == goal_opacity) &&
	    (Math.round(width) == goal_width) &&
	    (Math.round(height) == goal_height))
	{
		return;
	}

	setTimeout(ShowMainPage, UPDATE_SPEED);
}

/*
 * @param [page_title] string
 */
function LoadPage(page_title)
{
	LoadNavmenu();
	LoadFoot();

	/* Init the title char counter */
	i = 0;

	title = page_title;
	
	opacity = 0;
	width = 90;
	height = 90;

	goal_opacity = 1;
	goal_width = 100;
	goal_height = 100;
	
	TypeTitle();
	ShowMainPage();
}

export { LoadPage };
