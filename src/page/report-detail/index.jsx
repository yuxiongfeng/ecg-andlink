import React from 'react'
import { withRouter } from 'react-router';
import { Divider } from 'antd';
import "./index.css"
import path from '../../path'
class ReportDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['心动过速', '心率变异性偏低', '饮酒风险指数高', '疲劳中度', '心动过速', '心动速', '心动', '心动速', '心动', '心动速']
        }
    }

    goReportList = () => {
        console.log("Go To reportList");
        this.props.history.push(path.reportList);
    }

    render() {
        return <div className="rootContainer">
            {/* 基本信息 */}
            <div className="detail-container">
                <div className="reportUser-container">
                    <div>
                        <span>质子科技</span>
                        <span>男 30</span>
                    </div>

                    <div className="report-container">
                        <div className="reportIdTime">
                            <span>报告id:724</span>
                            <span>时间:2021-5-20 17:26</span>
                        </div>

                        <div className="reportDeviceDuration">
                            <span>测量设备:心电卡</span>
                            <span>测量时长:30s</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* 检测结果 */}
            <div className="result-containerRoot">
                <div className="result-container">
                    <div className="resultConclusion">本次测试结果综述</div>
                    <div className="resultConclusionContainer">
                        {this.state.list.map((value, index) => {
                            return <span key={index} className="result-itemDetail">{value}</span>
                        })}
                    </div>
                </div> 
            </div>

            {/* 常规心电图检测详情 */}
            <div className="result-detailContainer">
                <div className="result-detailInnerContainer">
                    <div className="resultConclusion">常规心电图检测详情</div>
                    <div className="heardInfoItemTitle" style={{ marginTop: 15 }}>
                        <div className="myDivider" />
                        <div className="rateIndicator">心率指标</div>
                    </div>

                    <Divider />

                    <div className="heartInfoFirstLine">
                        <div className="heartInfoItem">
                            <div>平均心率</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>109bpm</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>心博总数</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>237次</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>心率快慢</div>
                            <div style={{ color: "#FF8185", fontSize: 16 }}>心动过速</div>
                        </div>
                    </div>
                    <Divider />

                    <div className="heartInfoFirstLine">
                        <div className="heartInfoItem">
                            <div>最慢心率</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>105bpm</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>最快心率</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>114bpm</div>
                        </div>
                    </div>

                    <Divider />

                    <div className="heartInfoFirstLine">
                        <div className="heartInfoItem">
                            <div>心动过缓总时间</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>0秒</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>心动过速总时间</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>180秒</div>
                        </div>
                    </div>

                    <Divider />
                    <div className="heartInfoItemTip">*心率正常范围:60bpm-100bpm</div>

                </div>


                <div className="result-detailInnerContainer">

                    <div className="heardInfoItemTitle">
                        <div className="myDivider" />
                        <div className="rateIndicator">心律失常指标</div>
                    </div>

                    <Divider />

                    <div className="heartInfoFirstLine">
                        <div className="heartInfoItem">
                            <div>房颤</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>无</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>早搏</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>无</div>
                        </div>

                    </div>
                    <Divider />

                    <div className="heartInfoFirstLine">
                        <div className="heartInfoItem">
                            <div>心动过缓</div>
                            <div style={{ color: "#00BD79", fontSize: 16 }}>无</div>
                        </div>
                        <Divider type="vertical"></Divider>
                        <div className="heartInfoItem">
                            <div>心动过速</div>
                            <div style={{ color: "#FF8185", fontSize: 16 }}>有</div>
                        </div>
                    </div>

                    <Divider />

                </div>
            </div>

            {/* 健康建议 */}
            <div className="heartInfoSecondLineRoot">
                <div className="heartInfoSecondLine">
                    <div className="resultConclusion">健康建议</div>
                    <div >
                        <div style={{ marginTop: 8 }}>{"1.疑似房颤，房颤患者每天介意2次以上检测，疑似房颤，房颤患者每天介意2次以上检测疑似房颤，房颤患者每天介意2次以上检测"}</div>
                        <div style={{ marginTop: 8 }}>{"2.疑似房颤，房颤患者每天介意2次以上检测，疑似房颤，房颤患者每天介意2次以上检测疑似房颤，房颤患者每天介意2次以上检测"}</div>
                        <div style={{ marginTop: 8 }}>{"3.疑似房颤，房颤患者每天介意2次以上检测，疑似房颤，房颤患者每天介意2次以上检测疑似房颤，房颤患者每天介意2次以上检测"}</div>
                    </div>
                </div>
            </div>

            <div onClick={this.goReportList} className="reviewReport">
                <span style={{ color: 'white' }}>查看历史报告</span>
            </div>

        </div>;

    }
}
export default withRouter(ReportDetail);