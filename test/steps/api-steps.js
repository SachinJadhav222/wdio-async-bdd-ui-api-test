const { Given, When, Then, AfterAll, After } = require("cucumber");
const assert = require("assert").strict;
const restHelper = require("../support/restHelper");

Given("I place GET request to {}", async function (path) {
  this.context["response"] = await restHelper.getData( `${process.env.JSON_placeholder}${path}`);
  //console.log(this.context["response"]);
});

Then("I get reponse code {int}", function (int) {
  assert.equal(this.context["response"].status, int);
});

When("I send one GET request to {}", async function (path) {
    const response = await restHelper.getData(
      `${process.env.JSON_placeholder}${path}/${this.context["id"]}`
    );
    this.context["response"] = response;
  });

  Given("The contact with {int} exist", async function (id) {
    this.context["id"] = id;
  });
 
  Then('I should receive', function (docString) {
    assert.deepEqual(this.context["response"].data, JSON.parse(docString));
  });

  Given("A contact {}", function (request) {
    //\console.log('>>>> in Given >>>',this)
  this.context["request"] = JSON.parse(request);
  //log.info('Request data set');
 
  
});
//console.log('>>>> out postcls >>>',this)

When("I send POST request to {}", async function (path) {
  this.context["response"] = await restHelper.postData(
    `${process.env.SERVICE_URL}${path}`,
    this.context["request"]
  );
  // console.log('>>>> in post >>>',this)
 // log.info('POST Request data set');
});

Then("I get response code {int}", async function (code) {
  assert.equal(this.context["response"].status, code);
});

When(
  "I send PATCH request with a {} to {}",
  async function (phoneNumberPayload, path) {
    const response = await restHelper.patchData(
      `${process.env.SERVICE_URL}${path}/${this.context["id"]}`,
      JSON.parse(phoneNumberPayload)
    );
    this.context["response"] = response;
  }
);

When("I send GET request to {}", async function (path) {
  const response = await restHelper.getData(
    `${process.env.SERVICE_URL}${path}/${this.context["id"]}`
  );
  this.context["response"] = response;
});

Then(/^I receive (.*)$/, async function (expectedResponse) {
  assert.deepEqual(this.context["response"].data, JSON.parse(expectedResponse));
});

When("I send DELETE request to {}", async function (path) {
  const response = await restHelper.deleteData(
    `${process.env.SERVICE_URL}${path}/${this.context["id"]}`
  );
  this.context["response"] = response;
});