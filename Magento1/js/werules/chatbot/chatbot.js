// display/hide match mode
function werulesTogleMatchMode(element)
{
	//debugger;
	var val = element.value;
	var name = element.name;
	name = name.substr(0, name.lastIndexOf("[")) + "[similarity]";
	var target = document.getElementsByName(name);
	if (val === 0)
		target[0].disabled = false;
	else
		target[0].disabled = true;
}

function werulesTogleEnable(element)
{
	//debugger;
	// var val = element.value;
	// var name = element.name;
	// if (val == 0)
	// {
	// 	name = name.substr(0, name.lastIndexOf("[")) + "[similarity]";
	// 	var target = document.getElementsByName(name);
	// 	target[0].disabled = false;
	// }
	// else
	// {
	// 	name = name.substr(0, name.lastIndexOf("[")) + "[similarity]";
	// 	var target = document.getElementsByName(name);
	// 	target[0].disabled = true;
	// }
}

// display/hide reply mode
function werulesTogleReplyMode(element)
{
	//debugger;
	var val = element.value;
	var name = element.name;
	name = name.substr(0, name.lastIndexOf("[")) + "[command_id]";
	var target = document.getElementsByName(name);
	if (val === 0)
		target[0].disabled = true;
	else
	{
		//target[0].classList.remove("werules-disabled");
		//target[0].style = "";
		target[0].disabled = false;
	}
}