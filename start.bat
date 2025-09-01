@echo off
echo Starting WVP Plus Consulting Website...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Set environment variables for Windows
set NODE_ENV=development
set PORT=3000

REM Start the development server
echo Starting development server on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm run dev

pause