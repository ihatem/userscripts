// ==UserScript==
// @name         Close medium membership footer banner
// @namespace    https://github.com/ihatem/userscripts
// @version      1.0.1
// @description  try to take over the world!
// @author       @ihatem
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://*.medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @homepage     https://github.com/ihatem
// @homepageURL  https://github.com/ihatem
// @supportURL   https://github.com/ihatem/userscripts/issues
// @updateURL    https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/medium_close_membership_footer.user.js
// @downloadURL  https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/medium_close_membership_footer.user.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements("button[data-testid=close-button]", actionFunction);

function actionFunction(jNode) {
  jNode.click();
}
