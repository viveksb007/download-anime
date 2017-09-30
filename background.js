chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(
  function(request,sender){
    if(request.src == 'rapidVideo'){
      // first open rapid src tab and extract url
      openDownloadWindow(request.url);
    }else if (request.src == 'betaServer') {
      openDownloadWindow(request.url);
    }
    console.log(request.src);
    console.log(request.url);
  }
);

function openTabAndExtractURL(url){
  // Rapid Video Server aren't working atm.
}

function openDownloadWindow(link){
  //console.log(link);
  //window.open(link,'Download Window');
  var dButton = document.createElement('a');
  dButton.download = 'testing';
  dButton.href = link;
  dButton.click();
}
