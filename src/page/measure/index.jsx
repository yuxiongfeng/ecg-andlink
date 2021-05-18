import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router';
import measureDataCenter from '../../network/measureDataCenter';
import topic from '../../topic';
import Eventutil from '../../util/EventUtil';
import LogUtil from '../../util/LogUitl';
import "./index.css"
import ECGBar from "../ecg/ecg-bar";

class Measure extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const Hejia = require("https://open.home.komect.com/jssdk/hejia-1.5.0.min.js");
        // console.log("---Hejia", Hejia);
        // Hejia.addLog("dfffff");
    }

    connectDevice = () => {
        var params = { deviceId: 'CMCC-589239-546C0E7AD20E' };
        // window.Hejia.startAndlink(function (deviceId) {
        //     // deviceId - String => The id of the connected andlink device.
        //     alert(deviceId);
        // }, function (msg, obj) {
        //     // msg - String => error message
        //     // obj – Object => { resultCode:!0, resultCodeMessage: string }
        //     alert(msg);
        //     alert(obj.resultCode + obj.resultCodeMessage);
        // });
        window.Hejia.getDeviceInfo(params, function (obj) {
            // obj - Object => {device：{...}, location: {...}}.
            alert(JSON.stringify(obj));
        }, function (msg, obj) {
            // msg - String => error message
            // obj – Object => { resultCode:!0, resultCodeMessage: string }
            alert(msg);
            alert(obj.resultCode + obj.resultCodeMessage);
        });

        // window.Hejia.getCurrentParam({ paramName: ["softVersion"], deviceId: 'CMCC-589239-546C0E7AD20E'}, function (device) {
        //     // device - Object => device object.
        //     alert(device.id);
        // }, function (msg, obj){
        //     // msg - String => error message
        //     // obj – Object => { resultCode:!0, resultCodeMessage: string }
        //     alert(msg);
        //     alert(obj.resultCode + obj.resultCodeMessage);
        // });
    }

    render() {
        var params = JSON.stringify(this.props);
        return <>
            <div className="canvas-container">
                <ECGBar />
                <div onClick={this.connectDevice}>连接设备</div>
            </div>
        </>;
    }
}

export default withRouter(Measure);