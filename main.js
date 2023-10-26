var extensionId = "agnaejlkbiiggajjmnpmeheigkflbnoo"; //Chrome
if(typeof browser !== 'undefined' && typeof chrome !== "undefined"){
  extensionId = "{57081fef-67b4-482f-bcb0-69296e63ec4f}"; //Firefox
}

// Register Presence
chrome.runtime.sendMessage(extensionId, {mode: 'active'}, function(response) {
   console.log("Blazt's Discord Presence registred", response)
});

let state = document.title ? document.title : window.location.hostname;
let detail = "";
let fullpath = "Scrimba";
const titles = Array.from(document.getElementsByClassName("title small"))
if (titles.length) {
    const arrayMaybe = titles.map(function(title) {

      return title.innerText
    })
    fullpath = arrayMaybe.join(" / ")
    state = arrayMaybe[arrayMaybe.length-1]
    arrayMaybe.pop()
    detail += arrayMaybe.join(" / ")
}

// Wait for presence Requests
chrome.runtime.onMessage.addListener(function(info, sender, sendResponse) {
  // console.log('Presence requested', info);
  sendResponse(getPresence());
});


// Return Presence
var time = Date.now()
function getPresence(){
  return {
    clientId: '1165177145031663656  ',
    presence: {
      state : state,
      largeImageKey : "scrimba",
      largeImageText: fullpath,
      details: detail,
      startTimestamp: time,
      instance: true,
    }
  };
}