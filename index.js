((base) => {
    let counter = 0;
    Promise.prototype.thenlog = function (res) {
        const id = ++counter, cl = console.log.bind(console);
        const nodeLog = (p, v, c) => cl(require('chalk') ? require('chalk')[c](p) : p , v);
        const broLog = (p, v, c) => cl('%c ' + p + ' %c ' + v, `color:${c}`, `color:black`);
        const log = (p, v, c) => (typeof window === 'undefined' ? nodeLog : broLog)(p, v, c);
        log(`then #${id} init>`, res, 'green');
        return base.call(this, value => (log(`then #${id - 1} fires`, value, 'magenta'), res(value)));
    }
})(Promise.prototype.then);
