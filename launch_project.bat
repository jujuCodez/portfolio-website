@echo off

REM Navigate to the project directory
cd /d %~dp0

REM Launch the Python server in a minimized window
start /min python -m http.server

REM Pause to allow Python server to start
timeout /t 2 /nobreak >nul

REM Open the index.html file via the Python server's localhost URL
start http://localhost:8000

REM Navigate to the React directory
cd article5

REM Launch the React server in a minimized window without opening the browser
start /min cmd /c "npm run start -- --no-open"

REM Close the main command prompt window
exit
