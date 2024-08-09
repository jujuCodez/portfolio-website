@echo off

REM Navigate to the project directory
cd /d %~dp0

REM Launch the Python server in a minimized window
start /min python -m http.server

REM Pause to allow the Python server to start
timeout /t 2 /nobreak >nul

REM Open the index.html file via the Python server's localhost URL
start http://localhost:8000

REM Navigate to the React directory
cd article5

REM Launch the React server in a minimized window
start /min cmd /c "npm run start"

REM Wait for a few seconds to ensure the React server has started
timeout /t 5 /nobreak >nul


REM Navigate to the Node.js server directory (assuming it's in the root directory)
cd ..

REM Launch the Node.js server with node server.js in a minimized window
start /min cmd /c "node server.js"

REM Close the main command prompt window
exit