var div = document.getElementById('abstract')
var display = 0;



function hideShow()
{
	if(display == 1)
	{
		div.style.display = 'block';
		display = 1;
	}
	else
	{
		div.style.display = 'none';
		display = 1;
	}
}