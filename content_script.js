
var URL = document.URL;
var serverList = document.getElementById("selectServer");
var server = serverList.options[serverList.selectedIndex].value;
console.log(server);


if(server.search("s=rapidvideo") != -1){
  rapidVideo();
}else if(server.search("s=beta") != -1){
  betaServer();
}else if(server.search("s=openload") != -1 || server.search("s=kissanime")){
	openload();
}


function rapidVideo(){
  var iFrameDiv = document.getElementById("divContentVideo");
  var iFrameSrc = iFrameDiv.firstChild.getAttribute("src");
  chrome.runtime.sendMessage({src:'rapidVideo' , url:iFrameSrc, type:'iframeLink'});
}

function betaServer(){
    var downloadLink = document.getElementById("my_video_1_html5_api").getAttribute("src");
    chrome.runtime.sendMessage({src:'betaServer' , url:downloadLink, type:'videoLink'});
}

function openload(){
	var iFrameDiv = document.getElementById("divContentVideo");
    var iFrameSrc = iFrameDiv.firstChild.getAttribute("src");
	chrome.runtime.sendMessage({src:'openload', url:iFrameSrc, type:'iframeLink'});
}
