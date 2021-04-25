const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/api/cucumber.json',
    output: 'reports/api/api-test-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'Directory Service',
    brandTitle:'REST API Test Report',
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "MacBookPro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
    