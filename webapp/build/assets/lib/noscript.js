(function () {
  if (
    !!window.ActiveXObject ||
    "ActiveXObject" in window ||
    !window.AudioContext ||
    !window.RTCPeerConnection ||
    !window.navigator.mediaDevices ||
    !window.AudioWorkletNode
  ) {
    var headDom = document.head || document.getElementsByTagName("head")[0];
    var iframeStyleDom = document.createElement("style");
    iframeStyleDom.type = "text/css";
    headDom.appendChild(iframeStyleDom);
    var sheet = iframeStyleDom.sheet || iframeStyleDom.styleSheet;
    var selector = ".noscript-iframe";
    var styleRulesStr =
      "position: absolute;left: 0;top: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 999;border: 0 none;padding: 0;";
    if (sheet.insertRule) {
      sheet.insertRule(selector + "{" + styleRulesStr + "}", 0);
    } else if (sheet.addRule) {
      sheet.addRule(selector, styleRulesStr, 0);
    }
    var iframeUrl =
      (typeof window.PUBLIC_URL === "string" ? window.PUBLIC_URL : "/app") +
      "/noscript.html";
    var iframe = document.createElement("iframe");
    iframe.className = "noscript-iframe";
    iframe.src = iframeUrl;
    document.body.appendChild(iframe);
  }
})();
