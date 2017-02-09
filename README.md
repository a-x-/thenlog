# .then log
The js-promise-`.then()`-calls logger for both node.js and browser.

```js
require('thenlog');

Promise.resolve(0)
  .thenlog(v=>v + 1)
  .thenlog(v=>v * 2)
  .thenlog(v=>Math.pow(v, 4))
  .then(v => v)
  .thenlog(v=>v / 0)
  .thenlog(v => {})
  .then(v => 'foobar');
```

Browser / Node.js

<img width="300" src="https://cloud.githubusercontent.com/assets/6201068/22793566/4675183a-ef01-11e6-88c5-c5230f64482d.png"/> <img width="500" align="right" src="https://cloud.githubusercontent.com/assets/6201068/22793390/c4d30cf6-ef00-11e6-881d-13bc216b0f09.png"/> 


## Story en
Promise chains debugging is not too convenient.
You have to replace code shorthands (e.g. `.then(_.union)`) by long statements with a `console.log` instructions.

You have to see many 3th-party call-chains in the browser inspector's debugger in async mode.
And `debugger` injection in node.js for async code debugging using `node debug` is not convenient way again.


## Story ru
Дебажить промисы не очень удобно.
То и дело приходится разорять изящные конструкции вида `.then(_.union)`, внедряя туда `console.log`.

В дебаггере браузера часто приходится смотреть на полотна 3th-party кода.
А в node.js с помощью `node debug` чтобы отлаживать асинхронщину приходится внедрять тут и там `debugger`, что очень неудобно, см. выше.
