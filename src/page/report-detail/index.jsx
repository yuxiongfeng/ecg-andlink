import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router';
import "./index.css"
import path from '../../path'
class ReportDetail extends React.Component {

    goMeasure(){
        console.log("go measure ...",this);
        this.props.history.push(path.measure);
    }


    render() {
        //注意刷新之后参数消失了，导致报错
        var user = this.props.location.state.user;
        console.log("参数传递--->detail user:",user);
        return <>
            <div onClick={()=>this.goMeasure()}>
                detail page(click go to measuring)
            </div>
        </>;
    }
}
export default withRouter(ReportDetail);