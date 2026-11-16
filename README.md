# Inventory Angular Front End

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.7.

## Running Application

In order to run application:
1. Install dependencies  `npm install`
2. Run application  `npm run start`

Please note: this application uses proxy setting for calling right API and setting is picked up when running `start`

To run available tests please use:

`npm run test`


Please note:
- Application accepts list of inventory items in form of Strings, where every entry is placed in new line:
  Aged Brie 2 20
  Normal Item -2 1  etc...
- or JSON with inventory items:
`  [
  {
    "name": "Normal Item",
    "sellIn": 3,
    "quality": 20
  }
  ]`
