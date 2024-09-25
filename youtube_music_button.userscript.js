// ==UserScript==
// @name         Youtube Music Button In Youtube
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Add youtube music button to youtube actions
// @author       You
// @match        https://*.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document-idle
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.3/waitForKeyElements.js
// @updateURL    https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/youtube_music_button.userscript.js
// @downloadURL  https://raw.githubusercontent.com/ihatem/userscripts/refs/heads/main/youtube_music_button.userscript.js
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements("div#actions", appendMusicButtonToActions);

function appendMusicButtonToActions() {
  const genreMetaTag = document.querySelector('meta[itemprop="genre"]');

  if (!genreMetaTag || (genreMetaTag && genreMetaTag.content !== "Music")) {
    return;
  }

  const anchor = document.createElement("a");

  const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
            <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
            <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
            <path fill="#FFFFFF" d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"></path>
        </svg>
    `;

  if (window.trustedTypes && !window.trustedTypes.defaultPolicy) {
    window.trustedTypes.defaultPolicy = window.trustedTypes.createPolicy(
      "default",
      {
        createHTML: (string, sink) => string,
      }
    );
  }

  // Set the innerHTML to be the YouTube Music icon (using a placeholder here, replace with actual icon)
  // anchor.innerHTML = svgIcon;
  anchor.innerHTML = window.trustedTypes.defaultPolicy.createHTML(svgIcon);

  // Get the current URL
  const currentUrl = window.location.href;

  console.log({ currentUrl });

  // Transform it to a YouTube Music URL
  const musicUrl = currentUrl.replace("www.youtube", "music.youtube");

  // Set the href of the button to the YouTube Music URL
  anchor.href = musicUrl;
  anchor.id = "music-button";

  // Set the target to _blank so it opens in a new tab
  anchor.target = "_blank";

  // Set the title of the button
  anchor.title = "Open in YouTube Music";

  // cursor pointer
  anchor.style.cursor = "pointer";

  // fix height to 36px
  anchor.style.height = "36px";
  anchor.style.width = "36px";

  // margin right
  anchor.style.marginRight = "8px";

  // Prepend the button to the element with the id "actions"
  const actions = document.getElementById("actions");
  const musicButton = document.getElementById("music-button");

  if (musicButton) {
    musicButton.remove();
  }

  actions.prepend(anchor);
}

new MutationObserver((mutationsList) => {
  appendMusicButtonToActions();
}).observe(document.querySelector("title"), {
  subtree: true,
  childList: true,
});
