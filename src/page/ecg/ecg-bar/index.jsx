import React from "react";
import { withRouter } from "react-router-dom";
import ECGGrid from "../../../util/ecg/grid";
import ECGGraph from "../../../util/ecg/ecg";
import "./index.css";
import LogUtil from "../../../util/LogUitl";

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

class ECGBar extends React.Component {
    name = "Measure"
    constructor() {
        super();
        this.ecgRef = React.createRef();
        this.gridRef = React.createRef();
        this.barEcgGraphRef = React.createRef();
    }

    onMessage = val => {
        LogUtil.d("On receive message");
        this.plotter.appendNewData(val);
    }

    state = {
        graphWidth: 0,
        graphHeight: 0,
        ecgData: {
            breath: -1,
            heartRate: -1,
            mac: "",
            cardiacArrest: false,
            timestamp: 0
        },
        ecgState: {
            mac: "",
            battery: -1,
            conductiveShedding: -1, // -1 表示未知 0 导电脱落  1 导电脱落
            bodyFall: -1, // -1 表示未知 0 未跌倒  1 身体跌倒
            remainingStoragePercentage: -1
        },
        ecgBaseState: {
            mac: "",
            batteryRemaining: -1
        }
        , msg: ''
    };

    step = timestemp => {
        let elapse;
        if (this.lastTimestemp !== undefined) {
            elapse = timestemp - this.lastTimestemp;
        }
        if (elapse >= 80) {
            this.plotter.setLoopInterval(elapse);
            this.plotter.draw(this.ecgRef.getContext("2d"), {
                x: 0, y: 0, width: this.state.graphWidth, height: this.state.graphHeight
            });
            this.lastTimestemp = timestemp;
        } else if (this.lastTimestemp === undefined) {
            this.lastTimestemp = timestemp;
        }

        if (this.aniReq) cancelAnimationFrame(this.aniReq);
        this.aniReq = requestAnimationFrame(this.step);
    }

    componentDidMount() {
        window.addEventListener("focus", this.onPageFocus);
        window.addEventListener("resize", this.onBrowserWindowResize);
        const { clientWidth, clientHeight } = this.barEcgGraphRef;
        this.setState({
            graphWidth: clientWidth,
            graphHeight: clientHeight
        }, () => {
            ECGGrid.draw(this.gridRef.getContext("2d"), {
                x: 0, y: 0, width: clientWidth, height: clientHeight
            });
            this.aniReq = requestAnimationFrame(this.step);
        });
        this.plotter = ECGGraph.getPlotter();
    }

    onBrowserWindowResize = () => {
        const { clientWidth, clientHeight } = this.barEcgGraphRef;
        console.log("ecgGraphref:", this.barEcgGraphRef);
        this.setState({
            graphWidth: clientWidth,
            graphHeight: clientHeight
        }, () => {
            const rect = { x: 0, y: 0, width: clientWidth, height: clientHeight };
            ECGGrid.draw(this.gridRef.getContext("2d"), rect);
            this.plotter.clearChart(this.ecgRef.getContext("2d"), rect);
        });
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.aniReq);
        window.removeEventListener("focus", this.onPageFocus);
        window.removeEventListener("resize", this.onBrowserWindowResize);
    }

    render() {
        const { graphWidth, graphHeight } = this.state;
        const positonStyle = { position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" };
        return (
            <a className="ecg-bar" href="/#">
                <div ref={el => this.barEcgGraphRef = el} className="ecg-graph">
                    <canvas
                        ref={el => this.gridRef = el}
                        style={{ ...positonStyle }}
                        width={graphWidth}
                        height={graphHeight}
                    />
                    <canvas
                        ref={el => this.ecgRef = el}
                        style={{ backgroundColor: "transparent", ...positonStyle }}
                        width={this.state.graphWidth}
                        height={this.state.graphHeight}
                    />
                </div>
                <div className="ecg-unit-container">
                    <span>10mm/mV</span>
                    <span>25mm/s</span>
                </div>
            </a>
        );
    }
}

export default withRouter(ECGBar);