/*
check kissanime url for video source accordingly fetch video link

video source is rapidVideo, then
<video class="vjs-tech" preload="metadata" poster="https://www385.playercdn.net/thumb/2/170505/6982uIMlqCRQZFn.jpg" style="width:100%; height:100%;" data-setup="{}" id="vjs_video_3_html5_api" tabindex="-1">
<source src="https://www1010.playercdn.net/87/3/oTebHg-XbZ0zRvz7hSMuAA/1506231159/170509/558D4yL67goXify.mp4" type="video/mp4" title="720p" data-res="720">
</video>

video source is beta server, then
<video id="my_video_1_html5_api" class="vjs-tech" data-setup="{&quot;nativeControlsForTouch&quot;: false}" preload="auto" src="https://3.bp.blogspot.com/zpnMl55efLzZC5vCJfCGpTQVvMXHT7BGdmKaBXKghHUzY_rV-L5RXlP61wugXz6wAalBhPz9Qjjn6K2pZz8bGnGnZ5TG7I2IlNuaB7N5G6tvJeif01tgGxcxr4fdK5W2hS5_-DQJpqNl-uQawoKzWhsI93fyQh54mJM2gbObT1OUFv-o2P66M4ITFM6lqx2dEf9qFxAsV-eJjvVEIgEjAq2w7pUmTJPM1e3lVma0f5qYN_UQRUgWUkIAlTlLDB3Yn6CcKDnfhfqK2zTp6kz6Ve5iK4j-V3tHTYZnXAsduxYLNOmPWTEhpfeGkNDbC55KELESgBQJ5pfuw1-N0r5fgzJhKtFpVlPxaSLSeojyStjvdEicgwtrnt1-ZZV1QI91HmPnmTIAOF_uM-595_5ckTM38Yj1qupnBB6kzuPK5cHpClk7QUgIaWJMhD1nGJmodQ9GuOl6bkVIKfhaWStd-Dy28mcnFrmCniAlHBNHP-A4PNU6kGbAZXxsOPp-gIw2_SoWw3luBi8ZQeyDB75ORL09SHwdejqxhxcqhIi4L5MxelxcD8GeMXH8effJ1nTkLsMr92cR_SiPtHE5d2U8wuDnFNYPSkPuMGE8mLwtjQ=m22">
</video>

*/

var URL = document.URL;
if(URL.search("default") != -1){
  rapidVideo();
}else if(URL.search("beta") != -1){
  betaServer();
}


function rapidVideo(){
  var iFrameDiv = document.getElementById("divContentVideo");
  var iFrameSrc = iFrameDiv.firstChild.getAttribute("src");
  chrome.runtime.sendMessage({src:'rapidVideo' , url:iFrameSrc});
}

function betaServer(){
    var downloadLink = document.getElementById("my_video_1_html5_api").getAttribute("src");
    chrome.runtime.sendMessage({src:'betaServer' , url:downloadLink});
}
