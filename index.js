// Write a detailed explanation with || steps || words how
// withVar / withLet function works and why did we get the expected result

const app = () => {
    const withVar = () => {
      for (var index = 0; index < 5; index += 1) {
        setTimeout(() => console.log(`var idx = ${index}`), 0);
        console.log(`var index withOutSetTimeOut = ${index}`);
      }
    };
  
    const withLet = () => {
      for (let index = 0; index < 5; index += 1) {

        setTimeout(() => console.log(`let index = ${index}`), 0);

        console.log(`let index withOutSetTimeOut = ${index}`);
      }
    };
    
    withVar();
    withLet();
};
setTimeout(app, 0);

// 1. When our code first runs it adds our functions (withVar and withLet) in call stack, of course after app(call) witch gose to callstack and then 
// to webapi -> event queue and then runs, even if it has 0 as timout value

// 2. Of course console.log will run as expected, because after incrimintation, setTimeout will go in webApi and then in event queue waiting for console.log to finish

// 3. Ok, so here is the intersting part why var idx = 5(we can say it is some kind of bug, because let is working as expected, but it is not)
// I should mention that var has a function scope but let has a block scope
// I var's case the lopp will run 5 times, at this point index will be equal with 4, but because var has a function scope, when the setTimeout will be called from event queue,
// the index value will incriment with 1
// Because var is function scoped it will increment from 4 to 5 and then not run the loop.

// If let it's all simpler, it would run in a for block(because let has a block scope) as expected 