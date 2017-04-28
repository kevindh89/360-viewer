<div style="text-align: center;"><h1>Vensterworks - 360 viewer</h1></div> 

## Setup

Open your terminal and go to the folder app/ inside this project:
> cd app/

Start a local server by running the meteor command:
> meteor

The application is now available on: [link](http://localhost:3000)

## Code quality

### ESLint

ESLint is a package to run checks over the codebase. In this project the ESLint inspection runs automatically at every git commit.

You can also manually run ESLint inspection with this command:

> app/node_modules/.bin/eslint app/client/ app/server/