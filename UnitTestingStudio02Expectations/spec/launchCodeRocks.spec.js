const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  //testing code here...
  it('should return "Launch!" when passed a number ONLY divisible by 2', function(){
    let output = launchOutput(2);
    expect(output).toEqual("Launch!");
  });
  it('should return "Code!" if number is ONLY divisible by 3', function(){
    let output = launchOutput(3);
    expect(output).toEqual('Code!');
  })
   it('should return "Launch Rocks! (CRASH!!!!)" when passed a number divisible by 2 AND 5', function(){
    let output = launchOutput(10);
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
  });

});