import { Col, Row } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css"
import ReportItem from "./item";
import reportReq from '../../../src/network/report'
import Eventutil from '../../util/EventUtil';

class ReportList extends React.Component {
    state = {
        reports: [],
        newReports: [],
    };

    componentDidMount() {
        //网络请求
        this.fetchReportList();
    }

    fetchReportList() {
        reportReq.fetchReportList().then((res) => {
            console.log("fetch success");
        }).catch((msg) => {
            console.log("catch msg:", msg);
        });
    }

    render() {
        return <div className="container">
            {
                this.state.reports.length = 0,//赋值之前需要先清空数组元素
                this.state.newReports.length = 0,
                this.state.reports.push({ id: 1, name: "xiaoMing", heartRate: 60 }, { id: 2, name: "xiaoMing", heartRate: 60 }, { id: 3, name: "xiaoMing", heartRate: 60 }, { id: 4, name: "xiaoMing", heartRate: 60 }, { id: 5, name: "xiaoMing", heartRate: 60 }, { id: 6, name: "xiaoMing", heartRate: 60 }),
                this.state.newReports = this.state.reports.map(user => {
                    //var user2 = user;//浅拷贝
                    var user2 = JSON.parse(JSON.stringify(user));//当对象里面出现函数的时候，拷贝会失效
                    console.log("user:", user);
                    console.log("user2", user2);
                    user2.heartRate = user.heartRate * 2;
                    return user2;
                }),
                console.log("newReports:", this.state.newReports),
                console.log("reports:", this.state.reports),
                this.state.reports.map(function (user,index) {
                    return <ReportItem user={user} index={index} />
                })
            }
        </div>
    }
}

export default withRouter(ReportList);