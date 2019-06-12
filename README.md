# Alinta Energy coding challenge

This project was created to meet the requirements set in the Alinta Energy coding challenge.

## Project requirements

* Node.js and npm must be installed. https://www.npmjs.com/get-npm

## Project installation for local development on Mac

1. Clone the project onto your local machine using `git clone https://github.com/jackhayestech/alinta-code-challange-ui`

2. Install all the required dependencies with the command `npm install` run from within the projects main directory.

3. Create an local env file with the command `cp .env.example .env.development.local`

To avoid any cors issues from the api server you can using the following command `open -a Google\ Chrome --args --disable-web-security --user-data-dir=` to open a Chrome window with cors automatically disabled. Chrome must be closed fully before running this command. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.