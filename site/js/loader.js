import { LoadPage } from "/js/modules/pageloader.js";

window.onload = function()
{
    var pathName = localStorage.getItem("pagePathName");

    if (pathName != "") {
	    LoadPage("kilo@web ~/" + pathName);
    } else {
        LoadPage("kilo@web ~");
    }
}