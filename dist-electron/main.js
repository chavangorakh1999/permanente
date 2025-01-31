"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow = null;
function createWindow() {
    // Window creation code remains the same
}
// Proper IPC handler with correct event type
electron_1.ipcMain.handle("get-platform", (event) => {
    return process.platform;
});
electron_1.app.whenReady().then(createWindow);
// Rest of app lifecycle handlers remain unchanged
//# sourceMappingURL=main.js.map