import { PxPerMM, WidthPerPoint256, SampleRate } from "./util";

function covertVoltageToY(centerY, value) {
    return centerY - value * PxPerMM * 10;
};

const getPlotter = function(autoClear=true) {
    const Plotter = {
        ecgData: [],
        loopLength: 14,
        loopInterval: 28,
        currentX: 0,
        currentY: null,
        currentDataIndex: 0,
        autoClear: autoClear,
        draw: function(ctx, rect) {
            if (this.ecgData.length < this.currentDataIndex) return;
            const dataArray = [];
            for (let i = 0; i < this.loopLength; i++) {
                if (this.currentDataIndex < this.ecgData.length - 1) {
                    dataArray[i] = this.ecgData[this.currentDataIndex];
                    ++this.currentDataIndex;
                }
            }
            this.drawData(ctx, dataArray, rect);      
        },
        drawData: function(ctx, dataArray, rect) {
            //console.log("ctx---:",ctx,",dataArray:",dataArray,",rect:",rect);
            const centerY = rect.height / 2.0;
            if (this.currentX > rect.width) {
                if (this.autoClear) {
                    console.log(">>>> left data count", this.ecgData.length);
                    let maxLength = SampleRate * 20;
                    if (this.ecgData.length > maxLength) {
                        this.currentDataIndex = 0;
                        this.ecgData = this.ecgData.splice(this.ecgData.length - SampleRate * 5, SampleRate * 5)
                    }
                    console.log(">>>> after", this.ecgData.length);
                    this.currentX = 0;
                    ctx.clearRect(0, 0, rect.width, rect.height);    
                } else {
                    return;
                }
            }
    
            ctx.beginPath();
            ctx.lineWidth = 1.5;
            for (let i = 0; i < dataArray.length; i++) {   
                ctx.strokeStyle = dataArray[i].color;        
                if (i > 0) {
                    this.currentX += WidthPerPoint256;
                    this.currentY = covertVoltageToY(centerY, dataArray[i].value);
                    ctx.lineTo(this.currentX, this.currentY);
                } else {
                    if (this.currentY === null) {
                        this.currentY = covertVoltageToY(centerY, dataArray[i].value);
                    }
                    ctx.moveTo(this.currentX, this.currentY);
                }
            }
            ctx.stroke();
        },
        appendIndex: 0,
        appendNewData: function(data) {
            // const colors = ['yellow', 'red', 'cyan'];
            this.ecgData.push(...data.map(d => ({
                value: d,
                color: "#00FF06" // colors[this.appendIndex % colors.length]
            })));
            this.appendIndex++;
        },
        fullfilled: function(rect) {
            return this.currentX > rect.width; 
        },
        setLoopLength: function(len) {
            this.loopLength = len;
        },
        setCurrentDataIndex: function(idx) {
            this.currentDataIndex = idx;
        },
        setLoopInterval: function(interval) {
            const roundedInterval = Math.round(interval);
            this.loopInterval = roundedInterval;
            this.setLoopLength(SampleRate * this.loopInterval / 1000);
        },
        clearChart: function(ctx, rect, clearData=true) {
            if (clearData) {
                this.ecgData = [];
                this.currentX = 0;  
                this.currentY = null;
                this.currentDataIndex = 0;
            }
            ctx.clearRect(0, 0, rect.width, rect.height);  
        },
        getUndrawedEcgData: function() {
            if (this.ecgData.length > this.currentDataIndex) {
                return this.ecgData.slice(this.currentDataIndex).map(fd => fd.value);
            }
            return [];
        }
    }
    return Plotter;
}

const ECGGraph = {
    getPlotter
};

export default ECGGraph;