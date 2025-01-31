"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
    getPlatform: () => electron_1.ipcRenderer.invoke("get-platform"),
    // Other API methods...
});
//# sourceMappingURL=preload.js.map