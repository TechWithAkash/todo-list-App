
const { app, BrowserWindow } = require('electron');

app.whenReady().then(()=>{
   const window =  new BrowserWindow({
        width:800,
        height:600
    });
});