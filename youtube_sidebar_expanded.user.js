// ==UserScript==
// @name         YouTube Sidebar Always Expanded
// @namespace    https://github.com/ihatem/userscripts
// @version      1.0.0
// @description  Force YouTube sidebar to always open
// @author       @ihatem
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepage     https://github.com/ihatem
// @homepageURL  https://github.com/ihatem
// @supportURL   https://github.com/ihatem/userscripts/issues
// @run-at       document-idle
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/youtube_sidebar_expanded.user.js
// @downloadURL  https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/youtube_sidebar_expanded.user.js
// @grant        GM_addStyle
// ==/UserScript==

(async function () {
  "use strict";

  function wait_element(root, selector) {
    return new Promise((resolve) => {
      new MutationObserver(check).observe(root, {
        childList: true,
        subtree: true,
      });
      function check(changes, observer) {
        const element = root.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      }
    });
  }

  await wait_element(document, "ytd-mini-guide-entry-renderer");

  const menuBtn = document.querySelector(
    'button[aria-label="Guide"], button[aria-label="Menu"]'
  );
  menuBtn.click();
})();
