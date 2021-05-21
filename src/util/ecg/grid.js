import {
    SmallestGridEdgeSize
} from "./util";

const ECGGrid = {
    draw: function(ctx, rect) {
        console.log("rects:",rect);
        ctx.save();
        // row
        let lineWidth = 2.0;
        for (let i = 0; rect.y + i * SmallestGridEdgeSize <= rect.height; i++) {
            if (i % 5 === 0 ) {
                lineWidth = 2;
                ctx.strokeStyle = "#4d495a";   
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(rect.x, rect.y + i * SmallestGridEdgeSize);
                ctx.lineTo(rect.x + rect.width, rect.y + i * SmallestGridEdgeSize);
                ctx.stroke();
            }
        };
        // column
        let topY = 0;
        let ctxSaved = false;
        for (let j = 0; rect.x + j * SmallestGridEdgeSize <= rect.width; j++) {
            if (j % 5 === 0 ) {
                topY = 0;
                lineWidth = 2;
                ctxSaved = false;
                ctx.strokeStyle = "#4d495a";   
            } 
            else {
                lineWidth = 2.0;
                ctx.strokeStyle = "#5a5674";   
                topY = SmallestGridEdgeSize - lineWidth / 2;
                ctxSaved = true;
                ctx.save();
                ctx.setLineDash([
                    lineWidth, SmallestGridEdgeSize - lineWidth,
                    lineWidth, SmallestGridEdgeSize - lineWidth,
                    lineWidth, SmallestGridEdgeSize - lineWidth,
                    lineWidth, 2 * SmallestGridEdgeSize - lineWidth,
                ]);
            }
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.moveTo(rect.x + j * SmallestGridEdgeSize, topY);
            ctx.lineTo(rect.x + j * SmallestGridEdgeSize, rect.height - lineWidth / 2.0);
            ctx.stroke();

            if (ctxSaved) {
                ctx.restore();
            }
        }             
    }
}

export default ECGGrid;