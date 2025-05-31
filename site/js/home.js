var i = 0;
var title = "Kilobyte Industries ~";
var tw_speed = 50;

var updatespeed = 1;

function RunPage()
{
	TypeTitle();
	ShowMainPage();
}

function TypeTitle()
{
	if (i < title.length) {
		document.getElementById("pagetitle").innerHTML += title.charAt(i);

    		i++;
    		setTimeout(TypeTitle, tw_speed);
	}
}


var opacity = 0;
var width = 90;
var height = 90;

var goal_opacity = 1;
var goal_width = 100;
var goal_height = 100;

function ShowMainPage()
{
	var mainpage = document.getElementById("themainpage");

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

	setTimeout(ShowMainPage, updatespeed);
}
