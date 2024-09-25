// ==UserScript==
// @name         Youtube Thumbnail Button
// @namespace    http://tampermonkey.net/
// @version      2024-04-15
// @description  Adds a button to the youtube video page to get the thumbnail of the video in different sizes.
// @author       You
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document-idle
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/ihatem/userscripts/main/youtube_thumbnail_button.userscript.js
// @downloadURL  https://raw.githubusercontent.com/ihatem/userscripts/main/youtube_thumbnail_button.userscript.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements("div#actions", appendThumbnailButtonToActions);

function appendThumbnailButtonToActions() {
  const vidId = document.querySelector("[video-id]").getAttribute("video-id");

  const imageUrl = "https://img.youtube.com/vi/" + vidId + "/maxresdefault.jpg";

  const svgIcon = `
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" style="pointer-events: none; display: inherit; width: 100%; height: 100%" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"></path></svg>
  `;

  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy("default", {
      createHTML: (string, sink) => string,
    });
  }

  const anchor = document.createElement("a");

  anchor.innerHTML = window.trustedTypes.defaultPolicy.createHTML(svgIcon);

  // Set the href of the button to the YouTube Music URL
  anchor.href = imageUrl;

  // Set the target to _blank so it opens in a new tab
  anchor.target = "_blank";

  // Set the title of the button
  anchor.title = "Open in YouTube Music";

  // cursor pointer
  anchor.style.cursor = "pointer";

  // fix height to 36px
  anchor.style.height = "35px";
  anchor.style.width = "35px";
  anchor.style.textDecoration = "none";
  anchor.style.color = "white";

  // margin right
  anchor.style.marginRight = "8px";

  const actions = document.getElementById("actions");

  actions.appendChild(anchor);
}
