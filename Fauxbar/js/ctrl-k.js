$("*").live("keydown", function(e){
	if (e.ctrlKey == true && e.keyCode == 75 && !e.altKey) {
		window.location = chrome.runtime.getURL("/html/fauxbar.html#sel=os");
		return false;
	}
});