function LoadFoot()
{
	var foot = document.getElementById("footer");

	foot.innerHTML = `
	<a href="https://neocities.org">
        	<img class="img_link" src="../assets/images/neocities.png" alt="neocities logo">
      	</a>

      	<br>

      	<p style="font-size: 18px">
      	(C) 2025 kilobyte-disk<br>
      	The <a href="https://fonts.google.com/specimen/VT323">VT323</a> font was designed by Peter Hull (OFL 1.1)
      	</p>
	`;
}

export { LoadFoot };
