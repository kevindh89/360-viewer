<div style="text-align: center;"><h1>Vensterworks - 360 viewer</h1></div> 

## Setup

#### Install meteor
For this project it's required to install meteor: [https://www.meteor.com/install](https://www.meteor.com/install)

#### Open your terminal and go to the folder app/ inside this project
``cd app/``

#### Start a local server
``meteor``

#### Check your setup
The application is now available on: [http://localhost:3000](http://localhost:3000)

## Testing

In attempt to keep the project as stable as possible, unit tests should be created/updated when changes to the codebase are made.

The following testing packages are used:

* ``practicalmeteor:chai`` is used for asserting
* ``practicalmeteor:sinon`` is used for creating spies, stubs and mocks
* ``practicalmeteor:mocha`` is used as test driver, it autoloads all tests and has a webinterface to show the testresults

In the near future we would like to automate running the unit tests at every commit.

Tests can be ran with this command:

``meteor test --driver-package=practicalmeteor:mocha --port 4000``

Test results will be available on [http://localhost:4000](http://localhost:4000).


## ESLint (code quality)

ESLint is a JavaScript package to run checks over the codebase. In this project the ESLint inspection runs automatically at every git commit.

### Globally install ESLint

``npm install -g eslint``

You can also manually run ESLint inspection with this command:

``app/node_modules/.bin/eslint app/client/ app/server/``

## Directory structure
    
    ├ app                  # contains all application code
    ├─ client
    ├─ collections
    ├─ doc
    ├─ imports
    ├─ node_modules
    ├─ public
    ├─ routes
    ├─ server