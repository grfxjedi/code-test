# CodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

This is built to show an example of a project using Angular 9 w/ NgRx and Material

## Requirements

The app doesn’t have to look good and doesn’t have to accomplish much, but at least use some SCSS to apply few styles.  The key here is that anything you do know be completed fairly quickly (a few hours or so) and anything you don’t know can be learned within a reasonable time frame (maybe a few more hours). Plan to spend 6-8 hours total on the project.

* Create an Angular project
    * Use Material components
* Contents and appearance are open
* Create at least one component that contains at least one other child component, such as a table component that lists some data
* Create a service that connects to some data source and returns some data (can be faked, but the service should be called within the NgRx Effect (see next requirement)
* Implement NgRx in full:
    * A simple Store that holds at least one or two states
    * At least one NgRx Reducer
    * At least one NgRx Effect that results in a final NgRx Action (clue = switchMap)
    * At least two typed actions - the initial action that you will use to initiate NgRx process flow and a second action that the NgRx Effect outputs so that the reducer can update the store with any data received from the service
    * At least one NgRx Selector that will be subscribed to by the view’s code-behind to display the updated result
* The component may only receive its data via an NgRx selector, and it should only use the store.dispatch(new ActionName(data)) method to initiate the request for data from the service – no direct communication with the service from the component is allowed
* Implement view conditionals and loops such as *ngIf  and  *ngFor
* Implement proper disposal of subscriptions in ngOnDestroy, and use ngOnInit instead of putting code in the constructor (where possible and/or reasonable)
* Implement dependency injection where appropriate

Bonuses
* Implement Angular component animation (Can be something simple or minimal like a table with data sliding in)
* Add unit tests (doesn't have to test much)
* Make it look good/descent using SCSS
* Connect to a real data source in the service(s)
* Use Typings instead of:  “any” or no specified return type
* Use generics:  Example: http.get<Model>(url)

## Prerequisites
You will need to have Node.js installed on your development machine.

* For Node.js and NPM, I prefer to use the [Node Version Manager (NVM)](https://github.com/creationix/nvm). This project was built using Node v12.1.0 and NPM v6.13.7
* **OR** you can download and install Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.


## Local dependencies
From the project directory run:

```
$ npm install
```

After that you should be able to build and run locally.

## Development server

Run `npm start` for a dev server and json DB. Navigate to `http://localhost:3000/` to view database. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

