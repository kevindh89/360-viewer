# 360 photo viewer

## Setup

This project requires to have JavaScript framework [Meteor](https://www.meteor.com/install) installed.

#### Pull 360-images to your local machine to develop with

```
sh 360-images-download.sh
```

#### Start a local Meteor server

Open your terminal and navigate to the project folder and execute this command:
```
cd app/ && meteor --settings ../settings/dev.json.dist
```

#### Check your setup

The application is now available on: [http://localhost:3000](http://localhost:3000)

##### Meteor settings

There is a dist version of the settings file located in ``settings/dev.json.dist``. 

Duplicate this file to ``settings/dev.json`` to use local configurations so it won't be committed to the Git repo.

When you add new settings please add them both to the ``dev.json.dist`` and ``prod.json.dist`` file.


## Testing

In attempt to keep the project as stable as possible, unit tests should be created/updated when changes to the codebase are made.

The following testing packages are used:

* ``practicalmeteor:chai`` is used for asserting
* ``practicalmeteor:sinon`` is used for creating spies, stubs and mocks
* ``practicalmeteor:mocha`` is used as test driver, it autoloads all tests and has a webinterface to show the testresults

In the near future we would like to automate running the unit tests at every commit.

Tests can be ran with this command:

```
meteor test --driver-package=practicalmeteor:mocha --port 4000
```

Test results will be available on [http://localhost:4000](http://localhost:4000).


## ESLint (code quality)

ESLint is a JavaScript package to run checks over the codebase. In this project the ESLint inspection runs automatically at every git commit.

### Install ESLint globally

```
npm install -g eslint
```

You can also manually run ESLint inspection with this command:

```
app/node_modules/.bin/eslint app/client/ app/server/
```

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
    ├────── uploadForm      # upload form component for admin panel
    ├── node_modules        # npm installs package dependencies in here
    ├── public              # web assets (models, images etc.)
    ├── routes              # routing definitions
    ├── server              # server side code
    ├──── methods           # server methods that can be called from the client side
    ├──── publications      # publish database data to the client side with publications to which the client side can subscribe
    ├──── tests             # for now this holds code that fills the database with mock data
    
## Logging

We implemented both logging for both client and server side exceptions.

When something triggers an exception and logging is enabled in the Meteor settings (like in ``settings/prod.json.dist``), then the exception will be send to Loggly.

[Loggly](http://www.loggly.com) is a log management platform which supports alerts and makes it easy to search through logs.


## Copyright and license

Code released under the [MIT License](https://github.com/kevindh89/360-viewer/blob/master/LICENSE).

The 360 viewer was built as a [Vensterworks](http://www.vensterworks.com) project.

