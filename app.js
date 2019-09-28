const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let url

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8080'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  const window = new BrowserWindow({
    minHeight: 800,
    maximizable: true,
    minimizable: true,
    minWidth: 600,
    closable: true,
    webPreferences: { webSecurity: false }
  })

  window.loadURL(url)
})
