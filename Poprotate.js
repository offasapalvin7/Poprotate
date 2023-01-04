// Declare variables and constants
const popupBlockerEnabled = true; // Enable/disable pop-up blocker
const ipRotationInterval = 600000; // Interval at which IP address is rotated (in milliseconds)
let currentIpAddress = ""; // Current IP address

// Set up browser action
chrome.browserAction.onClicked.addListener(function(tab) {
  // Toggle pop-up blocker
  popupBlockerEnabled = !popupBlockerEnabled;

  // Update browser action icon and tooltip
  if (popupBlockerEnabled) {
    chrome.browserAction.setIcon({path: "icon_on.png"});
    chrome.browserAction.setTitle({title: "Pop-up blocker: On"});
  } else {
    chrome.browserAction.setIcon({path: "icon_off.png"});
    chrome.browserAction.setTitle({title: "Pop-up blocker: Off"});
  }
});

// Set up pop-up blocker
if (popupBlockerEnabled) {
  chrome.webRequest.onBeforeRequest.addListener(function(details) {
    // Check if request is a pop-up
    if (details.type === "popup") {
      // Cancel the request
      return {cancel: true};
    }
  }, {urls: ["<all_urls>"]}, ["blocking"]);
}

// Set up IP address rotator
setInterval(function() {
  // Fetch new IP address from API
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      currentIpAddress = data.ip;
    });
}, ipRotationInterval);
