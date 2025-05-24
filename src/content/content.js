chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.action=="draw"){
    alert("Lets drawwwww")
  }
  if(message.action=="save"){
    alert("Lets saveeee")
  }
})
console.log("content file loaded")