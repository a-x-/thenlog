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
