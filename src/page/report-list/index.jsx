import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css"
import ReportItem from "./item";

class ReportList extends React.Component {

    state = {
        reports: []
    };

    componentDidMount() {
        this.setState({
            reports: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        });
    }

    render() {
        return <div className="containerList">
            {
                this.state.reports.map((value, index) => {
                    return <ReportItem key={index} index={index} />
                })
            }
        </div>
    }
}

export default withRouter(ReportList);