import request from './request'

const reportReq={
    fetchReportList:function(){
        return request.start({
            url:"",
            method:"get",
            data:{
                name:"test",
                pwd:"123456"
            }
        });
    }
}
export default reportReq;