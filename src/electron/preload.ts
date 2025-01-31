import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
	getPlatform: () => ipcRenderer.invoke("get-platform"),
	// Other API methods...
});
