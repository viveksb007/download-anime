chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(
  function(request,sender){

    if(request.type == 'videoLink'){
      console.log(request.url);
      openDownloadWindow(request.url);
    }else if(request.type == 'iframeLink'){
      openTabAndExtractURL(request.url,request.src);
    }

  }
);

function openTabAndExtractURL(url,src){
  chrome.tabs.create({url:url},function(tab){
    chrome.tabs.executeScript(tab.id,{file:"iframelink_scrape.js"});
  });
}

function openDownloadWindow(link){
  //console.log(link);
  //window.open(link,'Download Window');
  var dButton = document.createElement('a');
  dButton.download = 'testing';
  dButton.href = link;
  dButton.click();
}
