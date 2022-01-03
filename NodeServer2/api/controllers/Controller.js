const util = require('util')
const mysql = require('mysql')
const db = require('../db');
const mgr = require('../../Manager');

SET_DEVICE = 1;
ADD_TIMER = 2;
GET_SWITCHES_STATE = 3;
GET_TIMER_STATE = 4;

module.exports = {
    get: (req, res) => {
        console.log("GET RECEIVED.");
        let data = req.body;
        let st = "";
        switch (data.cmd) {
            case GET_SWITCHES_STATE:
                for (let i = 0; i <= mgr.NUMBER_OF_SWITCH - 1; i++)
                    st += mgr.getDeviceState(i);
                break;
            case GET_TIMER_STATE:
                for (let i = 0; i <= mgr.getTimer().length - 1; i++) {
                    let timer = mgr._timers[i];
                    st += timer.getDeviceID() + ":" + timer.getVal() + ":" + timer.getTime();
                    if (i < mgr.getTimer().length - 1)
                        st += '|';
                }
                break;
        }
        console.log(st);
        res.send(st);
    },
    post: (req, res) => {
        let data = req.body;
        let id = -1, val = -1, time = -1;
        switch (data.cmd) {
            case SET_DEVICE:
                id = data.id;
                val = data.val;
                mgr.setDeviceState(id, val);
                break;
            case ADD_TIMER:
                id = data.id;
                val = data.val;
                time = data.time;
                mgr.addTimer(id, val, time);
                break;
        }
        // response
        res.send("Success");
    },
}
