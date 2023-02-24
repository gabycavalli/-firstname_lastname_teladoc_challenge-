# -firstname_lastname_teladoc_challenge-

# Start

This challenge was done in Cypress 12+

## Clone Repo
### Name
```
-firstname_lastname_teladoc_challenge-
```
### Web
```
https://github.com/gabycavalli/-firstname_lastname_teladoc_challenge-
```
### For clone
```
git clone https://github.com/gabycavalli/-firstname_lastname_teladoc_challenge-.git
```

## tools needed

### Node js

* Windows
```
https://nodejs.org/en/download/
```
* Linux
Install CLI
```
sudo apt install curl
```
* Begin Instalation
```
sudo apt-get install -y nodejs
```
* Check Node Version
```
Node --version
```

## Cypress 

### Install - In repo folder
```
npm install cypress --save-dev
```

## Run Cypress
* If you want run Cypress in UI mode please run this command:
```
npx cypress open
```
* A UI runner will be open and you can select test that you want run

### Run Cypress by CLI mode
#### Run specific tests o group of test
```
npx cypress run --spec "./cypress/e2e/**/*"
```

### Run all specs 
```
npx cypress run
```

### Run Challenge test
```
For the propose of this challenge we will work with test.spec.js
This test is located in cypress/e2e/
test.spec.js contains both scenarios that was sent it in mail.
```
### UI
```npx cypress open
```
#### A UI runner will be open with "Welcome to Cypress!" should be appear.
* Select E2E Testing. (Should be Configured first)
* Choose a Browser and do click on Start E2E Testin in {browse}
* A tree of test should be appear 
* Do click on test.spec.js
#### Test should be executed successfuly!

### CLI
* From command line execute this:
``` npx cypress run --spec "./cypress/e2e/test.spec.js"
```
* Result
```
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.6.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v14.15.1 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (test.spec.js)                                                         │
  │ Searched:       J:\F\-firstname_lastname_teladoc_challenge-\cypress\e2e\test.spec.js           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  test.spec.js                                                                    (1 of 1)


  firstname_lastname_teladoc_challenge
    √ get size of the table (1907ms)
    √ Scenario 1 - Add a user and validate the user has been added to the table (2526ms)
    √ Scenario 2 - Delete the user novak from the table and validate the user has been deleted. (701ms)


  3 passing (9s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     8 seconds                                                                        │
  │ Spec Ran:     test.spec.js                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: 0 seconds

  -  Video output: J:\F\-firstname_lastname_teladoc_challenge-\cypress\videos\test.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  test.spec.js                             00:08        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!     
```