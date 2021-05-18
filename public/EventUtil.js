import PubSub, { publish } from 'pubsub-js'
const Eventutil={
    subscribe:function(topic,callback){
        require('pubsub-js').subscribe(topic,(msg,data)=>{
            callback(msg,data);
        });
    },

    publish:function(topic,content) {
        require('pubsub-js').publish(topic,content);
    }
}

export default Eventutil;