import * as React from "react";
import ReactDOM from "react-dom";
import {Card} from "antd";

export class Simulation extends React.Component{
    xxRef: React.RefObject<HTMLCanvasElement> = React.createRef()
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        if(this.xxRef.current){
            const context = this.xxRef.current.getContext('2d');
            if(context){
                context.beginPath();
                context.moveTo(250,250);
                context.lineTo(250,25);
                context.moveTo(250,250);
                context.lineTo(25,250);
                context.moveTo(250,500);
                context.lineTo(25,500);
                context.moveTo(250,500);
                context.lineTo(250,725);
                context.moveTo(500,250);
                context.lineTo(500,25);
                context.moveTo(500,250);
                context.lineTo(725,250);
                context.moveTo(500,500);
                context.lineTo(725,500);
                context.moveTo(500,500);
                context.lineTo(500,725);
                context.moveTo(25,375);
                context.lineTo(250,375);
                context.moveTo(375,25);
                context.lineTo(375,250);
                context.moveTo(725,375);
                context.lineTo(500,375);
                context.moveTo(375,725);
                context.lineTo(375,500);
                context.moveTo(625,170);
                context.lineTo(625,90);
                context.moveTo(625,90);
                context.lineTo(615,100);
                context.moveTo(625,90);
                context.lineTo(635,100);
                context.font = "bold 25px Verdana";
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillText("北",625,75);
                //西直行
                context.moveTo(125,475);
                context.lineTo(625,475);
                context.moveTo(625,475);
                context.lineTo(600,450);
                context.moveTo(625,475);
                context.lineTo(600,500);
                context.stroke();
                context.save();
            }
        }
    }
    render() {
        return (
            <canvas ref={this.xxRef} width={750} height={750} />
        );
    }
}