import React from 'react'
import { withRouter } from 'react-router';
import "./index.css"
import ECGBar from "../ecg/ecg-bar";
import { Button } from 'antd';
//Ant Design 样式文件
import 'antd/dist/antd.css';
import path from '../../path'

class Measure extends React.Component {
    getDeviceInfo = () => {
        var params = { deviceId: 'CMCC-589239-546C0E7AD20E' };
        //从原生app获取数据
        window.Hejia.getDeviceInfo(params, function (obj) {
            alert(JSON.stringify(obj));
        }, function (msg, obj) {
            alert(msg);
            alert(obj.resultCode + obj.resultCodeMessage);
        });
    }

    goDetail = () => {
        this.props.history.push(path.reportDetail);
    }

    render() {
        return <>
            <div className="canvas-container">
                <ECGBar />
            </div>
            <div className="otherContainer">
                <Button onClick={this.connectDevice} type="primary">获取设备info</Button>
                <Button type="primary" style={{ marginLeft: 10 }} onClick={this.goDetail}>go detail</Button>
            </div>
        </>;
    }
}

export default withRouter(Measure);