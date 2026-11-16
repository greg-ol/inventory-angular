# InventoryAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.7.

## Development server

To start a local server first install dependencies:

npm install

run application:
npm run start

To run unit test suite:

npm run test.


Please note:
- Application accepts list of inventory items in form where every entry is in new line:
  Aged Brie 2 20
  Normal Item -2 1  etc...
- or JSON with inventory items:
  [
  {
    "name": "Normal Item",
    "sellIn": 3,
    "quality": 20
  }
  ]
