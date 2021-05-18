const PubSub = require('pubsub-js');

const Eventutil={
    subscribe:function(topic,callback){
        PubSub.subscribe(topic,(msg,data)=>{
            callback(msg,data);
        });
    },

    publish:function(topic,content) {
        PubSub.publish(topic,content);
    }
}

export default Eventutil;