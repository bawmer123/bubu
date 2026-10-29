const { app, BrowserWindow, shell } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const indexUrl = pathToFileURL(path.join(__dirname, '..', 'build', 'index.html'));

function openExternal(url) {
  // Never pass untrusted schemes (including file:, javascript:, and custom schemes) to the OS.
  try {
    if (['https:', 'http:', 'mailto:'].includes(new URL(url).protocol)) {
      shell.openExternal(url);
    }
  } catch {
    // Ignore malformed URLs.
  }
}

function createWindow() {
  const window = new BrowserWindow({
    width: 1280,
    height: 850,
    minWidth: 800,
    minHeight: 600,
    title: 'ICMN & Partner',
    backgroundColor: '#0f172a',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  const localPage = indexUrl.href;
  window.webContents.setWindowOpenHandler(({ url }) => {
    openExternal(url);
    return { action: 'deny' };
  });
  window.webContents.on('will-navigate', (event, url) => {
    // HashRouter changes the fragment for in-app routes without leaving index.html.
    if (url.split('#')[0] !== localPage) {
      event.preventDefault();
      openExternal(url);
    }
  });
  window.loadURL(localPage);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
