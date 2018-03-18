# React Tic-Tac-Toe

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/react-tic-tac-toe)
[![License](https://img.shields.io/github/license/risan/react-tic-tac-toe.svg)](https://github.com/risan/react-tic-tac-toe/blob/master/LICENSE.md)

A tic-tac-toe game built with [React](https://reactjs.org). It's the complete example of tic-tac-toe game from the [official React tutorial](https://reactjs.org/tutorial/tutorial.html) plus some additional features:

* Display the cell's coordinate for each move on the history.
* Differentiate the currently selected step on the history.
* Use loop for displaying the board's cells.
* Add button to sort the history in ascending or descending order.
* Highlight the cells that won the game.
* Handle the case when it's a draw match.

Checkout and play around with the [demo here](https://risan.io/react-tic-tac-toe).

![React Tic-Tac-Toe](https://media.giphy.com/media/cIsRhX4Oqo6d9A3TYR/giphy.gif)

## Requirements

The following items are required to run this React application:

* [Node.js](https://nodejs.org) version 6 or higher

## Installation

### 1. Clone this repository

First, clone this repository to your local computer:

```shell
$ git clone git@github.com:risan/react-tic-tac-toe.git
```

### 2. Install the dependencies

Next, `CD` into the project directory and install all of the dependencies:

```shell
# Go to the project directory
$ cd react-tic-tac-toe

# Install all of the dependencies
$ npm install

# Or install it with Yarn
$ yarn install
```

### 3. Run the application 🎉

To run the application in the development mode, run the following command:

```shell
$ npm run start

# Or with yarn
$ yarn start
```

It will start a web server and automatically open up a new tab on your browser and load the url at [localhost:3000](http://localhost:3000). You can play around with the code on `src` directory, the page will automatically reload if you make any changes. You will see the build errors and lint warnings in the console.

There are also other available commands that you can use:

```shell
# Build the application that is optimized for production.
$ npm run build

# Run prettier.
$ npm run prettier
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)
