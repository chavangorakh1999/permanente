import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";
import path from "path";
import isDev from "electron-is-dev";

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
	// Window creation code remains the same
}

// Proper IPC handler with correct event type
ipcMain.handle("get-platform", (event: IpcMainInvokeEvent) => {
	return process.platform;
});

app.whenReady().then(createWindow);

// Rest of app lifecycle handlers remain unchanged
