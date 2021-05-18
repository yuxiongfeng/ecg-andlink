import React from "react";
import { Route, Router, Switch, withRouter } from "react-router-dom";
import "./index.css"
import path from "../../../path"
import store from 'store'
import LogUtil from '../../../util/LogUitl'

class ReportItem extends React.Component {
    /**
     * onclick参数传递注意
     */
    onItemClick = () => {
        console.log("path:", path.reportDetail);
        const { user, index } = this.props;
        //push 传递参数
        this.props.history.push({ pathname: path.reportDetail, state: { user } });
        console.log("id:", user.id, ",checker:", user.name, ",heartRate:", user.heartRate);
        //跨浏览器存储数据
        store.set("user", user);
        //读取数据
        var storeUser = store.get('user');
        console.log("store---> id:", storeUser.id, ",checker:", storeUser.name, ",heartRate:", storeUser.heartRate);
        this.goToDockerSetNet(index);
    }

    goToDockerSetNet(index) {
        var callback = window.android.goToDockerSetNet(index);
        LogUtil.d(callback);
    }

    render() {
        const { user } = this.props;
        return <>
            <div className="item-container" key={user.id} onClick={this.onItemClick}>
                <div>2021-05-11 10:56:32</div>
                <div className="item-container2">
                    <div className="user-style">检测人：{user.name}</div>
                    <div>平均心率:{user.heartRate}</div>
                    <div>查看详情：xxx</div>
                </div>
            </div>
        </>
    }
}
export default withRouter(ReportItem);