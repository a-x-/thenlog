require('.');

Promise.resolve(1)
    .thenlog(v=>v + 1)
    .thenlog(v=>v * 2)
    .thenlog(v=>0)
    .thenlog(v=>v / 0)
    .catch(e => console.error('hm', e));
