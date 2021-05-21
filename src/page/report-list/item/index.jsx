import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css"
import path from "../../../path"

class ReportItem extends React.Component {
    /**
     * onclick参数传递注意
     */
    onItemClick = () => {
        //push 传递参数
        this.props.history.push({ pathname: path.reportDetail });
    }

    render() {
        const { index } = this.props;
        return <>
            <div className="report-item" key={index} onClick={this.onItemClick}>
                <div className="report-time">2021-05-11 10:56:32</div>
                <div className="report-info">
                    <div className="report-user">检测人：xianming</div>
                    <div className="report-heartRate">平均心率:60</div>
                    <div className="report-queryDetail">查看详情 》</div>
                </div>
            </div>
        </>
    }
}

export default withRouter(ReportItem);