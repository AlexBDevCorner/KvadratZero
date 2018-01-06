const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 900,
    webPreferences: { backgroundThrottling: false }
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  mainWindow.on('resize', () => {
    mainWindow.webContents.send('screensize:change', mainWindow.getBounds());
  });
});

ipcMain.on('app:exit', (event) => {
  app.exit();
});

ipcMain.on('screensize:get', (event) => {
  mainWindow.webContents.send('screensize:receive', mainWindow.getBounds());
});
