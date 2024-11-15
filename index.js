const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const iconPath = path.join(__dirname, 'assets/icons/512x512.png');
  const icon = nativeImage.createFromPath(iconPath)

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: icon,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
      partition: 'persist:default',
      devTools: false // normal user does not need devtools
    }
  });

  mainWindow.loadURL('https://calendar.google.com');
  mainWindow.setMenu(null);
}

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.whenReady().then(createWindow);

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('browser-window-created', (_, window) => {
    window.webContents.on('before-input-event', (event, input) => {
      if (
        (input.control && input.shift && input.key.toLowerCase() === 'i') ||
        (input.key === 'F12') ||
        (input.control && input.shift && input.key.toLowerCase() === 'c')
      ) {
        event.preventDefault();
      }
    });
  });

  app.on('web-contents-created', (_, contents) => {
    contents.on('context-menu', (e) => e.preventDefault());
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}