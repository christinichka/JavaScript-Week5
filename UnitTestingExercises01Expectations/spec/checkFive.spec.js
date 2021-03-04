const checkFive = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function() {

  // it("should not change a single character", function(){
  //   expect(reverse("a")).toEqual("a");
  // });

  it("returns 'num is less than 5' when num < 5", function(){
    let output = checkFive(2);
    assert.strictEqual(output, "2 is less than 5.");
  });

  it("returns 'num is greater than 5' when num > 5", function() { 
    let output = checkFive(7);
    expect(output).toEqual('7 is greater than 5.');
  });

  it("returns 'num is equal to 5' when num === 5.", function() {
    let output = checkFive(5);
    expect(output).toEqual('5 is equal to 5.');
  });

});