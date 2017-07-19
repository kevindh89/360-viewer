<div style="text-align: center;"><h1>Vensterworks - 360 viewer</h1></div> 

## Setup

#### Install meteor
For this project it's required to install meteor: [https://www.meteor.com/install](https://www.meteor.com/install)

#### Pull 360-images to your local machine to develop with

MacOSX/Linux:

``sh 360-images-download.sh``

Windows:

``"360-images-download.bat" to be fixed``

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

All code within the ``app/client`` folder is only loaded client side, all code within ``app/server`` only server side and all code outside these folders is loaded in both.
    
    ├ app                   # contains all application code
    ├── client               
    ├──── components        # thin layer where template components get binded to Meteor templating
    ├──── layout            # base layout templates
    ├──── lib               # template helpers and other supportive code (the lib folder gets loaded before everything else)
    ├──── pages             # thin layer where page template get binded to Meteor templating
    ├── collections         # database layer
    ├──── lib               # helper classes that are used in models
    ├──── models            # database entity models
    ├──── schemas           # database schema definition
    ├── doc
    ├── imports             # application code in here, doesn't gets autoloaded
    ├──── client            # client side templates code
    ├────── components      # client side components
    ├────── pages           # client side pages
    ├──── lib
    ├────── aframeComponents # client side components that hook into the A-frame component system
    ├────── listener        # client side listeners
    ├────── uploadForm      # upload form component for admin panel
    ├── node_modules        # npm installs package dependencies in here
    ├── public              # web assets (models, images etc.)
    ├── routes              # routing definitions
    ├── server              # server side code
    ├──── methods           # server methods that can be called from the client side
    ├──── publications      # publish database data to the client side with publications to which the client side can subscribe
    ├──── tests             # for now this holds code that fills the database with mock data