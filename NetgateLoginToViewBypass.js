// ==UserScript==
// @name         Netgate Login to View Bypass
// @namespace    https://github.com/SolidGoat/NetgateLoginToViewBypass
// @version      2025.07.30
// @description  Replaces 'Log in to view' links with their images on forum.netgate.com
// @author       SolidGoat
// @match        https://forum.netgate.com/topic/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netgate.com
// @downloadURL  https://github.com/SolidGoat/NetgateLoginToViewBypass/raw/main/NetgateLoginToViewBypass.js
// @updateURL    https://github.com/SolidGoat/NetgateLoginToViewBypass/raw/main/NetgateLoginToViewBypass.js
// @supportURL   https://github.com/SolidGoat/NetgateLoginToViewBypass/issues/new?template=bug_report.md&title=%5Bbug%5D%20
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  setTimeout(() => {
    const loginRequiredLinks =
      document.getElementsByClassName("login-required");

    if (loginRequiredLinks.length > 0) {
      Array.from(loginRequiredLinks).forEach((link) => {
        const imgBaseUri = link.parentElement.getAttribute("href");
        const imgElement = document.createElement("img");
        imgElement.src = imgBaseUri;

        // Replace 'Log in to view' links with their images
        link.parentNode.replaceChild(imgElement, link);
      });
    } else {
      console.log("login-required not found");
    }
  }, 2000);
})();
