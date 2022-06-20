const path = require("path");
const { app, Menu, Tray, BrowserWindow, nativeImage } = require("electron");
const Main = require("electron/main");
const { MainWindow } = BrowserWindow

module.exports = (win) => {
    let tray;

    app.whenReady().then(() => {
        tray = new Tray(nativeImage.createFromPath(path.join(__dirname, "kaiheila.ico")));

        const context = Menu.buildFromTemplate([
            {
                label: "Exit Kaiheila",
                click: () => {
                    app.quit()
                }
            }
        ])

        //boilerplate user ID stuff
        tray.setToolTip("Lightout App");

        //handle events
        tray.on('click', (event, a, b) => {
            if (MainWindow) {
                if (!MainWindow.isVisible() && !win.isMinimized()) {
                    MainWindow.restore();
                    MainWindow.show();
                }
                MainWindow.hide();
            }
        })

        tray.setContextMenu(context)
    })
}