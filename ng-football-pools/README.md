# ng-football-pools

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How this application was created

Here are the commands and tweaks used to create the application

1) Create a new application
    
    `ng new ng-football-pools --routing --style=scss --prefix=bbv`

2) Prepare application (see git commit history)
    - Update npm package dependencies
    - Add prettier
    - Add debug support
    - Add ENV_PROVIDERS

3) Install *Angular Material*

    `yarn add @angular/material @angular/cdk hammerjs`

  Include fonts in `index.html`:

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Mono:300" rel="stylesheet">

  Include hammerjs in `main.ts`:

    import 'hammerjs';

  Patch global `styles.scss`:

    @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

    body { 
      font-family: Roboto, Arial, sans-serif;
      margin: 0;
    }

4) Add toolbar component

    `ng generate component toolbar`

5) Add home component

    `ng generate component home`

6) Add Matches feature

    `ng generate module matches`

    `ng generate service worldcup/worldcup`

    `ng generate component matches`
