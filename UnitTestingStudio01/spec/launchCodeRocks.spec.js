const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  //testing code here...
  // When passed a number that is ONLY divisible by 2, launchOutput returns 'Launch!'
  it('should return "Launch!" when passed a number that is ONLY divisible by 2', function(){
    let output = launchOutput(2);
    expect(output).toEqual('Launch!');
  });
  // When passed a number that is ONLY divisible by 3, launchOutput returns 'Code!'
  it('should return "Code!" when passed a number ONLY divisible by 3', function(){
    let output = launchOutput(3);
    expect(output).toEqual('Code!');
  });
  // When passed a number that is ONLY divisible by 5, launchOutput returns 'Rocks!'
  it('should return "Rocks!" when passed a number ONLY divisible by 5', function(){
    let output = launchOutput(5);
    expect(output).toEqual('Rocks!');
  });
  // When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
  it('should return "Launchcode!" when passed a number divisible by 2 AND 3', function(){
    let output = launchOutput(6);
    expect(output).toEqual('LaunchCode!');
  });
  // When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
  it('should return "Code Rocks!" when passed a number divisible by 3 AND 5', function(){
    let output = launchOutput(15);
    expect(output).toEqual('Code Rocks!');
  });
  // When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
  it('should return "Launch Rocks! (CRASH!!!!)" when passed a number divisible by 2 AND 5', function(){
    let output = launchOutput(10);
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
  });
  // When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
  it('should return "LaunchCode Rocks!" when passed a number that is divisible by 2, 3, and 5', function(){
    let output = launchOutput(30);
    expect(output).toEqual('LaunchCode Rocks!');
  });
  // When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
  it("should return 'Rutabagas! That doesn't work.' when passed a number NOT divisible by 2, 3, or 5", function(){
    let output = launchOutput(7);
    expect(output).toEqual("Rutabagas! That doesn't work.");
  });
});