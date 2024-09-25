// ==UserScript==
// @name         Close medium membership footer banner
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://*.medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @updateURL    https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/medium_close_membership_footer.userscript.js
// @downloadURL  https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/medium_close_membership_footer.userscript.js
// @grant    GM_addStyle
// ==/UserScript==

waitForKeyElements("button[data-testid=close-button]", actionFunction);

function actionFunction(jNode) {
  //-- DO WHAT YOU WANT TO THE TARGETED ELEMENTS HERE.
  jNode.click();
}
