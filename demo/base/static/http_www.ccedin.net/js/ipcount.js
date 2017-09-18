function ipRecord(path){
	var url=window.location.href;
	url=encodeURI(url); 
   	url=encodeURI(url);//alert("1111");
   	url=path+'/frontWeb.do?action=ipAdd&url='+url
   	ajaxPost(url);
}
function ajaxPost(url){//alert("1111");
	if(window.XMLHttpRequest) {
	     ajaxpost = new XMLHttpRequest();   
	 }else if(window.ActiveXObject) {
	     ajaxpost = new ActiveXObject("Microsoft.XMLHTTP");
	 }
	ajaxpost.open("POST", url);  
	ajaxpost.send();
	//ajaxpost.onreadystatechange = func;  
}
