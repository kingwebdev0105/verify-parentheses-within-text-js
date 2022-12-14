# verify-parentheses-within-text-js

Implement function verify(text) which verifies whether parentheses within text are correctly nested. You need to consider three kinds: (), [], <> and only these kinds. Examples:
 ```javascript
verify("---(++++)----")  -> 1 
verify("") -> 1 
verify("before ( middle []) after ") -> 1  
verify(") (") -> 0 
verify("<(   >)") -> 0 
verify("(  [   <>  ()  ]  <>  )") -> 1 
verify("   (      [)") -> 0
```

Code are below:  
 ````javscript
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
````
