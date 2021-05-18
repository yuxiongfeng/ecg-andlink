import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.btnClick = this.btnClick.bind(this);//bind this
        //this.textChange = this.textChange.bind(this);
    }
    state = {
        inputValue: 'test',
        lists: []
    }

    btnClick() {
        var list = this.state.lists;
        this.setState({
            lists: [...list, this.state.inputValue],
            inputValue: '',
        });
    }

    // textChange(e) {
    //     this.setState({
    //         inputValue: e.target.value,
    //     });
    // }

    textChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }


     toAndroid(type) {//此处type内容可以自定义
        var host = "android://";//host可以自定义,相当于与原生做一个协议
        var content = 
            "{" +
            "\"type\":"+type+"," +
            "\"data\":{" +
                "\"string1\":"+type+"}" +
                "\"string2\":"+type+"}" +
                "\"string3\":"+type+"}" +
                "\"string4\":"+type+"}" +
            "}";//可在此设置你的传参
        content = window.btoa(content);//此为js代码,base64转义可防止内容乱码以及简单的加密
        window.location.href = host + content;//执行本地跳转
    }

    render() {
        return (<>
            <><input onChange={this.textChange} value={this.state.inputValue} /><button onClick={this.btnClick}>submit</button></>
            <ul>
                {this.state.lists.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </>);
    }
}
export default withRouter(Home);