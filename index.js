var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

//tabs.open("http://www.todotrucos.org/register?agreed=true&step=2&tt=1&theme_id=206680");

var button = ToggleButton({
  id: "todotrucos-button",
  label: "TodoTrucos.org",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

require("sdk/tabs").on("ready", runScript);
 
function runScript(tab) {
  tab.attach({
	contentScriptFile: self.data.url("ut.js"),
  });
}
var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}
function handleHide() {
  button.state('window', {checked: false});
}

// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "todotrucos.org",
  contentScriptFile: "./script.js"
});

