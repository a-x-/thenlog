((base) => {
    let counter = 0;
    Promise.prototype.thenlog = function (res) {
        const id = ++counter, cl = console.log.bind(console);
        const nodeLog = (p,v) => cl(require('chalk') ? require('chalk').green(p) : p , v);
        const broLog = (p,v) => cl('%c ' + p + ' %c ' + v, 'color:green', 'color:black');
        const log = (p,v) => typeof window === 'undefined' ? nodeLog(p,v) : broLog(p,v);
        log(`then #${id} init>`, res);
        return base.call(this, value => (log(`then #${id} fire`, value), res(value)));
    }
})(Promise.prototype.then);
