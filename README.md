# UI and API test automation framework
*Test Automation for UI and API test project  using WebdriverIO , cucumberjs   and other tools
 The framework is BDD enabled using cucumber js to create feature file written in Gherkin Language*


#### Setup 
```
npm i
npm install -g json-server
```

#### Start mock REST API server 
```
json-server --watch test/mock-data/db.json
```
### Run API Test
```
npm run api-test
```
### API Test Report
```
npm run api-report
```
### UI Test
```
npm run ui-test
```
### UI Test report
```
npm run ui-report
```
#### Run ALL test & Generate Report 
```
npm test
```


