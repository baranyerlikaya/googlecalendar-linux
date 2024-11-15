const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const iconPath = path.join(__dirname, 'google-calendar.png');
  const icon = nativeImage.createFromPath(iconPath);
  
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: icon,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL('https://calendar.google.com');
  win.setMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
