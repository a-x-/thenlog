require('.');

Promise.resolve(0)
    .thenlog(v=>v + 1)
    .thenlog(v=>v * 2)
    .thenlog(v=>Math.pow(v, 4))
    .thenlog(v=>v / 0)
    .catch(e => console.error('hm', e))
    .thenlog(v => {});
