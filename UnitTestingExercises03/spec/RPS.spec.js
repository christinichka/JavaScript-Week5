const test = require('../RPS.js');
const assert = require('assert');


describe("whoWon", function() {
    it("returns 'TIE!' if both players select the same action", function() {
    let output = test.whoWon('paper', 'paper');
    assert.strictEqual(output, "TIE!");
});

  it("returns 'Player2 wins!' if Player1 = rock & Player2 = paper", function() {
    let output = test.whoWon('rock', 'paper');
    assert.strictEqual(output, "Player 2 wins!");
  });

  it("returns 'Player 2 wins!' if Player1 = paper & Player2 = scissors", function() {
    let output = test.whoWon('paper', 'scissors');
    assert.strictEqual(output, "Player 2 wins!");
  });

  it("returns 'Player 2 wins!' if Player1 = scissors & Player2 = rock", function() {
    let output = test.whoWon('scissors', 'rock');
    assert.strictEqual(output, "Player 2 wins!");
  });

});