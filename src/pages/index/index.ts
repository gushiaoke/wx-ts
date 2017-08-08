// index.js
// 获取应用实例
import * as wxasync from '../../utils/wx-wrapper';

const app = getApp();

interface IIndexPageParam extends WeApp.PageParam {
    test: () => void;
    bindViewTap: () => void;
}

const PageIndex: (x: IIndexPageParam) => void = Page;

PageIndex({
    data: {
        motto: 'Hello World',
        userInfo: {},
    },
    // 事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    async onLoad() {
        console.log('onLoad');
        this.test();

        const userInfo = await wxasync.getUserInfo();
        console.log({userInfo});
        (this as WeApp.Page).setData({
            userInfo,
        });
    },

    test() {
        console.log('test');
    },

});
