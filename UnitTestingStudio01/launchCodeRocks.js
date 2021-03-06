function launchOutput(num){
   let output = '';
    if (num%2 === 0  || num%3 === 0 || num%5 === 0) { 
    if (num%2 === 0){
      output += 'Launch';
    }  
    if (num%3 === 0){
      output += 'Code';
    }  
    if (num%5 === 0){
      output += ' Rocks';
    }
    output = output.trim() + '!';  
    if (output === 'Launch Rocks!') {
      output += ' (CRASH!!!!)';
    }
    return output;
  }
  return `Rutabagas! That doesn't work.`; 
}

//   // Number ONLY divisible by 2
//   if(num % 2 === 0) {
//     return('Launch!');
//   }
//   // Number ONLY divisible by 3
//   if(num % 3 === 0) {
//     return('Code!');
//   }
//   // Number ONLY divisible by 5
//   if(num % 5 === 0) {
//     return('Rocks!');
//   }
//   // Number divisible by 2 AND 3
//   if (num % 2 === 0 || num % 3 === 0) {
//     return('LaunchCode!')
//   }
//   // Number divisible by 3 AND 5
//   if (num % 3 === 0 || num % 5 === 0) {
//     return('Code Rocks!');
//   }
//   // Number divisible by 2 AND 5
//   if (num % 2 === 0 || num % 5 === 0) {
//     return('Launch Rocks! (CRASH!!!!)');
//   }
//   // Number divisible by 2, 3, AND 5
//   if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
//     return('LaunchCode Rocks!');
//   }
//   // Number NOT divisible by 2, 3, AND 5
//   else if (num % 2 !== 0 || num % 3 !== 0 || num % 5 !== 0){
//     return("Rutabagas! That doesn't work.");
//   }
// }

module.exports = launchOutput;