# Stock Master

This web app is intended to make keeping a stock portfolio that follows a pre-decided investment strategy easier and more fun. It is NOT intended to be used for algorithmic trading.

## Requirements

- Node
- npm
- In order to access the Avanza API locally, you need to add a plugin to your browser that allows CORS requests.
  - For Chrome/Brave: [moseif-origin-cors-changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

## Setup

    npm ci

### Configuration

The file `src/data/portfolioData.js` needs to be created, which should contain details about your current portfolio. You can use [examplePortfolioData.js](examplePortfolioData.js) as a starting point.

The following variables need to be manually kept up to date:

- `tenYearsBondInterest` and `averageOMXS30volatility` in [src/BestYield/stockIndicators.js](src/BestYield/stockIndicators.js).

### Viewing your local portfolio

Change `SHOW_PORTFOLIO` to `true` in [constants.js](src/constants.js).

Use this import in [Portfolio/dataRetriever.js](src/Portfolio/dataRetriever.js):

    import portfolios from "../data/portfolioData";

Construct your portfolio in `data/portfolioData.js`.

* You can add the key `cash` to any stock in your portfolio. This will increase (or decrease) the sum of that stock with the entered amount. This is useful when figuring out what stocks to buy or sell in order to fulfill your personal investment strategy.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

To run locally you might also want to do the following changes:

* Change BASE_URL in [constants.js](./src/constants.js) to `http://localhost:8080`.
* Change SHOW_PORTFOLIO in [constants.js](./src/constants.js) to `true`.
* Change the portfolio data path in [dataRetriever.js](./src/Portfolio/dataRetriever.js).

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

Note that this will deploy your current local changes and not your latest commit.
