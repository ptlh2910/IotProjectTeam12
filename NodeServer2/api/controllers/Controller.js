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
        let data = req.body;
        let st = "";
        if (!data.cmd) {
            st = mgr.getSwitchStateString();
            // return;
        }
        switch (data.cmd) {
            case GET_SWITCHES_STATE:
                st = mgr.getSwitchStateString();
                break;
            case GET_TIMER_STATE:
                st = mgr.getTimerString();
                break;
        }
        res.send(st);
    },
    post: (req, res) => {
        let data = req.body;
        let id = -1, val = -1, time = -1;
        switch (data.cmd) {
            case SET_DEVICE:
                id = data.id;
                val = data.val; // 0 - 1
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
