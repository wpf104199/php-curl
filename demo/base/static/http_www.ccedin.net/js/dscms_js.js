
/*加入收藏夹*/
function addfavorite(url, title) {
	if(!url){
		url=window.location;
	}
	if(!title){
		title=document.title;
	}
	try {
		window.external.addfavorite(url, title);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
		}
		catch (e) {
			alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528ctrl+d\u8fdb\u884c\u6dfb\u52a0");
		}
	}
}
/*设为首页*/
function sethome(obj, vrl) {
	if(!vrl){
		vrl=window.location;
	}
	
	try {alert(vrl)
		//obj.style.behavior = "url(#default#homepage)";
		obj.setHomePage(vrl);alert(vrl)
	}
	catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e) {
				alert("\u6b64\u64cd\u4f5c\u88ab\u6d4f\u89c8\u5668\u62d2\u7edd\uff01\n\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u201cabout:config\u201d\u5e76\u56de\u8f66\n\u7136\u540e\u5c06 [signed.applets.codebase_principal_support]\u7684\u503c\u8bbe\u7f6e\u4e3a'true',\u53cc\u51fb\u5373\u53ef\u3002");
			}
			var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref("browser.startup.homepage", vrl);
		}
	}
}

