# Stock Master

This web app is intended to make keeping a stock portfolio that follows a pre-decided investment strategy easier and more fun. It is NOT intended to be used for algorithmic trading.

## Requirements

- Node
- npm
- In order to access the Avanza API locally, you need to add a plugin to your browser that allows CORS requests.
  - For Chrome: [moseif-origin-cors-changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

## Setup

    npm install

### Configuration

The file `src/data/portfolioData.js` needs to be created, which should contain details about your current portfolio. You can use [examplePortfolioData.js](examplePortfolioData.js) as a starting point.

The following variables need to be manually kept up to date:

- `tenYearsBondInterest` and `averageOMXS30volatility` in [src/BestYield/stockIndicators.js](src/BestYield/stockIndicators.js).

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run deploy`

Deploy app to GitHub pages.

## Learn More

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
