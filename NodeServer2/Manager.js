// const timer = require('./Timer')
var Timer = require("./Timer")

class Manager {
    constructor() {
        this.NUMBER_OF_SWITCH = 5;
        this.last = 0;
        this.state = Array(this.NUMBER_OF_SWITCH).fill(0);
        this._timers = [];
    }

    getDeviceState(id) {
        return this.state[id];
    }

    setDeviceState(id, val) {
        this.state[id] = val;
    }

    addTimer(id, val, time) {
        var timer1 = new Timer(id, val, time);
        this._timers.push(timer1);
    }

    getTimer() {
        return this._timers;
    }

    update(dt) {
        let st = "";
        for (let i = 0; i <= this._timers.length - 1; i++) {
            st += ":" + this._timers[i].getTime();
        }
        if (st.length > 0) console.log(st);
        for (let i = 0; i <= this._timers.length - 1; i++) {
            let timer = this._timers[i];
            timer.update(dt);
            if (timer.isActivated()) {
                this.setDeviceState(timer.getDeviceID(), timer.getVal());
                this._timers.splice(i, 1);
            }
        }
    }

    printSwitchesState() {
        let st = "";
        for (let i = 0; i <= this.NUMBER_OF_SWITCH - 1; i++) {
            st += this.getDeviceState(i);
        }
        console.log("Current state : ", st);
    }

    getSwitchStateString() {
        let st = "";
        for (let i = 0; i <= mgr.NUMBER_OF_SWITCH - 1; i++)
            st += mgr.getDeviceState(i);
        return st;
    }

    getTimerString() {
        let st = "";
        for (let i = 0; i <= mgr.getTimer().length - 1; i++) {
            let timer = mgr._timers[i];
            st += timer.getDeviceID() + ":" + timer.getVal() + ":" + timer.getTime();
            if (i < mgr.getTimer().length - 1)
                st += '|';
        }
        return st;
    }
}

var mgr = new Manager();
module.exports = mgr;