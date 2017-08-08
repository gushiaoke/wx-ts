// index.js
// 获取应用实例
let app = getApp();

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
    onLoad() {
        console.log('onLoad');
        this.test();
    },

    test() {
        console.log('test');
    },

});
