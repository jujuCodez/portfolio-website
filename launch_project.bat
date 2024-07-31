@echo off

REM Navigate to the project directory
cd /d %~dp0

REM Launch the Python server
echo Starting Python server...
start python -m http.server

REM Navigate to the React directory
cd article5

REM Launch the npm server
echo Starting npm server...
start npm start

REM Open the index.html file in the default browser
cd ..
start index.html

pause
