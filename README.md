[![Build Status](https://dev.azure.com/SaxoUniversity/boilerplate/_apis/build/status/nishants.react-cypress-azure-boilerplate?branchName=master)](https://dev.azure.com/SaxoUniversity/boilerplate/_build/latest?definitionId=8&branchName=master)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How To

```bash
# install dependecies
npm install

# Runs the app in the development mode.
# Open http://localhost:3000 to view it in the browser.
# The page will reload if you make edits.
# You will also see any lint errors in the console.
npm start

# Run all lints
npm run lint

# Run and watch Jest tests
npm test

# Run UI tests in Cypress UI
npm run cypress:open

# Run UI tests in headless mode
npm run cypress:ci
```

### Conitnuous Integrations

- This app uses Azure for CI/CD.
- Refer [azure-pipelines.ci.yml](./azure-pipelines.ci.yml)

### Deployment

- Any change to repo is auto deployed user AWS azure to this url :https://agromart.z10.web.core.windows.net/
