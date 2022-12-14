function verify(string) {
  string = string.replace(/[^\(\)\[\]\{\}\<\>]/g, '');
  let previousString = '';

  while (string.length !== previousString.length) {
    previousString = string;
    string = string.replace(/\(\)|\[\]|\{\}|\<\>/g, '');
  }

  return (string.length == 0 ? 1 : 0);
}

console.log(verify('---(++++)----'));
console.log(verify(''));
console.log(verify('before ( middle [] ) after '));
console.log(verify(') ('));
console.log(verify('<(   > )'));
console.log(verify('(  [  <>  ()   ]  <>   )'));
console.log(verify('   (      [)'));