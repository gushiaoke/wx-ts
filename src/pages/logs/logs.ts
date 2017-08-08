
// logs.js
import * as util from '../../utils/util.js';
Page({
    data: {
        logs: [],
    },

    onLoad() {
        (this as WeApp.Page).setData({
            logs: (wx.getStorageSync('logs') || []).map( (log: any) => {
                return util.formatTime(new Date(log));
            }),
        });
    },
});
