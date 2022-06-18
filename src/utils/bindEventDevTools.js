module.exports = function (browserWindow) {
  try {
    browserWindow.webContents.on("before-input-event", (_, input) => {
      "keyUp" == input.type &&
        input.alt &&
        input.shift &&
        input.control &&
        ")" === input.key &&
        browserWindow.webContents.toggleDevTools();
    });
  } catch {}
};
