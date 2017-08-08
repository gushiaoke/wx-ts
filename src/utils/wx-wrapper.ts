'use strict';

export async  function login() {
    return new Promise<WeApp.LoginResult>((resolve, reject) => {
        wx.login({
            success: (res) => resolve(res),
            fail: () => reject(`wx.login failed`),
        });
    });
}

let userInfo: WeApp.UserInfoDetail | null = null;

export async  function getUserInfo() {
    if (userInfo) {
        return userInfo;
    }
    return new Promise<WeApp.UserInfoDetail>((resolve, reject) => {
        wx.getUserInfo({
            success: (res) => {
                if (res.userInfo) {
                    userInfo = res.userInfo;
                }
                resolve(res.userInfo);
            },
            fail: (err) => reject({
                err,
                message: `wx.getUserInfo failed`,
            }),
        });
    });
}

export async  function setStorage(key: string, value: any) {
    return new Promise((resolve, reject) => {
        wx.setStorage({
            key,
            data: value,
            success: () => resolve(),
            fail: () => reject(`wx.setStorage(${key}) failed`),
        });
    });
}

export async  function getStorage(key: string, defaultValue: any) {
    return new Promise((resolve, reject) => {
        wx.getStorage({
            key,
            success: (res) => resolve(res.data),
            fail: () => {
                console.warn(`wx.getStorage(${key}) failed, return default value:`, defaultValue);
                resolve(defaultValue); // reject(`wx.getStorage(${key}) failed`)
            },
        });
    });
}

export async  function showModal(title: string, content: string, showCancel: boolean) {
    return new Promise((resolve) => {
        wx.showModal({
            title,
            content,
            showCancel,
            success(res) {
                resolve(res);
            },
        });
    });
}

export async  function download(url: string, header?: object) {
    return new Promise((resolve, reject) => {
        wx.downloadFile({
            url,
            header,
            success: (res) => resolve(res),
            fail: () => reject(`donwload file ${url} failed`),
        });
    });
}

export async  function request(url: string, header?: object) {
    return new Promise((resolve, reject) => {
        // console.log({
        //     url,
        //     header
        // });
        wx.request({
            url,
            header,
            success: (res) => resolve(res),
            fail: (res) => {
                console.error({res});
                reject(`request url ${url} failed:`);
            },
        });
    });
}

export async  function sleep(t: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, t));
}

export async  function saveFile(filePath: string) {
    return new Promise<string>((resolve, reject) => {
        wx.saveFile({
            tempFilePath: filePath,
            success(res) {
                resolve(res.savedFilePath);
            },
            fail(err) {
                reject({
                    err,
                    message: `save file failed:, ${filePath},  error:, ${err}`,
                });
            },
        });
    });
}

export async  function getSavedFileInfo(filePath: string) {
    return new Promise((resolve, reject) => {
        wx.getSavedFileInfo({
            filePath,
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject({
                    err,
                    message: `get saved file info failed, ${filePath},  error:, ${err}`,
                });
            },
        });
    });
}

export async  function getLocation() {
    return new Promise((resolve, reject) => {
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                resolve(res);
            },
            fail: (err) => {
                reject({
                    err,
                    message: `getLocation failed, error:, err, ${err}`,
                });
            },
        });
    });
}

export async  function getSystemInfo() {
    return new Promise((resolve, reject) => {
        wx.getSystemInfo({
            success(res) {
                resolve(res);
            },
            fail: (err) => reject({
                err,
                message: `getSystemInfo failed, error:, ${err}`,
            }),
        });
    });
}

export async  function setClipboardData(data: string) {
    return new Promise((resolve, reject) => {
        wx.setClipboardData({
            data,
            success(res) {
                resolve(res);
            },
            fail: (err) => reject({
                err,
                message: `setClipboardData failed, error:, err ${err}`,
            }),
        });
    });
}

export async  function showActionSheet(itemList: string[]) {
    return new Promise((resolve, reject) => {
        wx.showActionSheet({
            itemList,
            success(res) {
                resolve(res);
            },
            fail: (err) => reject({
                err,
                message: `showActionSheet failed, error:, ${err}`,
            }),
        });
    });
}

export async  function getNetworkType() {
    return new Promise<WeApp.NetworkType>((resolve, reject) => {
        wx.getNetworkType({
            success: (res) => resolve(res.networkType),
            fail: (err) => reject({
                err,
                message: `getNetworkType failed, error:, ${err}`,
            }),
        });
    });
}
