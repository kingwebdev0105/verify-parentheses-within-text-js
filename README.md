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
   function verify(text) {
      let stack = [];
      for (const c of text) {
          if (c === '(' || c == '[' || c == '<') {
              stack.push(c);
          } else if (c === ')' || c == ']' || c == '>') {
              if (stack.length == 0) {
                  return 0;
              }
              const popValue = stack.pop();
              if (c === ')' && popValue != '(') {
                  return 0;
              } else if (c === ']' && popValue != '[') {
                  return 0;
              } else if (c === '>' && popValue != '<') {
                  return 0;
              }
          }
  
      }
  
      if (stack.length > 0) {
          return 0;
      }
  
      return 1;
   }
   
   console.log(verify("---(++++)----"));
   console.log(verify(""));
   console.log(verify("before ( middle []) after "));
   console.log(verify(") ("));
   console.log(verify("<(   >)"));
   console.log(verify("(  [   <>  ()  ]  <>  )"));
   console.log(verify("   (      [)"));
````
