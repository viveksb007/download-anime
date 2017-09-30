var URL = document.URL;
console.log(URL);
if(URL.search("rapidvideo")){
	var downloadLink = document.getElementById("vjs_video_3_html5_api").firstChild.getAttribute("src");
    chrome.runtime.sendMessage({src:'rapidVideo' , url:downloadLink, type:'videoLink'});
    close();
}else if(URL.search("openload")){
	close();
	// src appears after ad is seen. TODO: get stream link somehow
	var downloadLink = document.getElementById("olvideo_html5_api").getAttribute("src");
	downloadLink = "https://openload.co" + downloadLink;
    chrome.runtime.sendMessage({src:'openload' , url:downloadLink, type:'videoLink'});
}