# ICMN & Partner

React website with an Electron desktop wrapper for Windows x64. The website and
desktop application use the same frontend; the unused FastAPI backend is not
required by the desktop app.

## Build for Windows x64

On a Windows x64 machine, install Node.js 22 and then run in PowerShell:

```powershell
cd frontend
npm ci --legacy-peer-deps
npm run dist:win
```

The **portable executable** is written to `frontend/release/ICMN-Partner-0.1.0-win-x64.exe`.
It does not require installation. To create an installer instead, run
`npm run dist:win:installer` (also outputs to `frontend/release/`). These builds
are not code-signed; Windows SmartScreen may display a warning. Review the
publisher and source before running an unsigned executable.

You can also run the **Windows x64 desktop build** GitHub Actions workflow and
download its `icmn-partner-windows-x64` artifact. Builds are run on Windows;
this is the recommended way to obtain a verified Windows executable from CI.

## Development

```sh
cd frontend
npm ci --legacy-peer-deps
npm start            # browser development server
npm run desktop      # production React build in Electron (requires a desktop session)
npm run build        # static website build in frontend/build/
```

The desktop wrapper loads the static build locally, uses hash routing so
service and legal pages work under `file://`, and opens external web and email
links in the default system application. The contact form currently displays a
confirmation only and does not send messages. The large hero/section photos
are hosted externally and require internet access; the bundled UI and logo
work without a network connection.
