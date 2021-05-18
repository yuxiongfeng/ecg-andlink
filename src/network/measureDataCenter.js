import Eventutil from "../util/EventUtil";
import topic from '../topic'
import LogUtil from "../util/LogUitl";

export const MsgType = {
    ecgData: 1,
    deviceInfo: 2,
    currentParams: 3
}

const measureDataCenter = {
    observers: [],
    registerObserver: function (observer) {
        this.observers.push(observer);
    },

    removeRegister: function (observer) {
        var idx = this.observers.indexOf(observer);
        if (idx > -1) {
            this.observers.splice(idx, 1);
        }
    },

    start: function () {
        //订阅数据,接收来自app的数据
        Eventutil.subscribe(topic.ecgData, (msg, data) => {
            LogUtil.d("ecgData subscribe...");
            this.dispatchMsg(msg, data);
        });

        Eventutil.subscribe(topic.deviceInfo, (msg, data) => {
            LogUtil.d("deviceInfo subscribe...");
            this.dispatchMsg(msg, data);
        });

        Eventutil.subscribe(topic.currentParams, (msg, data) => {
            LogUtil.d("currentParams subscribe...");
            this.dispatchMsg(msg, data);
        });
    },

    dispatchMsg: function (msg, data) {
        LogUtil.d("observers size:"+this.observers.length);
        this.observers.map((observer) => {
            if (msg == MsgType.ecgData) {
                observer.onEcgMessage(msg, data);
            } else if (msg == MsgType.deviceInfo) {
                observer.onDeviceInfo(msg, data);
            } else if (msg == MsgType.currentParams) {
                observer.onCurrentParams(msg, data);
            }
        });
    },

}

export default measureDataCenter;