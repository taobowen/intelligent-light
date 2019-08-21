import * as React from "react";
import 'antd/dist/antd.css';
import {DataTableProps} from "../../api/interface";

export class Simulation extends React.Component<DataTableProps, any>{
    xxRef: React.RefObject<HTMLCanvasElement> = React.createRef();
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        if(this.xxRef.current){
            const {eastStraight ,eastLeft, northLeft, northStraight, southLeft, southStraight, westLeft, westStraight} = this.props.data;
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
                // 东直行
                if(eastStraight.light == "green") {
                    context.moveTo(625,275);
                    context.lineTo(125,275);
                    context.moveTo(125,275);
                    context.lineTo(150,250);
                    context.moveTo(125,275);
                    context.lineTo(150,300);
                }
                // 东左拐
                if(eastLeft.light == "green") {
                    context.moveTo(625,350);
                    context.lineTo(475,350);
                    context.moveTo(475,350);
                    context.lineTo(350,475);
                    context.moveTo(350,475);
                    context.lineTo(350,625);
                    context.moveTo(350,625);
                    context.lineTo(375,600);
                    context.moveTo(350,625);
                    context.lineTo(325,600);
                }
                // 西直行
                if (westStraight.light == "green") {
                    context.moveTo(125,475);
                    context.lineTo(625,475);
                    context.moveTo(625,475);
                    context.lineTo(600,450);
                    context.moveTo(625,475);
                    context.lineTo(600,500);
                }
                // 西左拐
                if (westLeft.light == "green") {
                    context.moveTo(125,400);
                    context.lineTo(275,400);
                    context.moveTo(275,400);
                    context.lineTo(400,275);
                    context.moveTo(400,275);
                    context.lineTo(400,125);
                    context.moveTo(400,125);
                    context.lineTo(375,150);
                    context.moveTo(400,125);
                    context.lineTo(425,150);
                }
                // 南直行
                if (southStraight.light == "green") {
                    context.moveTo(475,625);
                    context.lineTo(475,125);
                    context.moveTo(475,125);
                    context.lineTo(450,150);
                    context.moveTo(475,125);
                    context.lineTo(500,150);
                }
                // 南左拐
                if (southLeft.light == "green") {
                    context.moveTo(400,625);
                    context.lineTo(400,475);
                    context.moveTo(400,475);
                    context.lineTo(275,350);
                    context.moveTo(275,350);
                    context.lineTo(125,350);
                    context.moveTo(125,350);
                    context.lineTo(150,325);
                    context.moveTo(125,350);
                    context.lineTo(150,375);
                }
                // 北直行
                if (northStraight.light == "green"){
                    context.moveTo(275,125);
                    context.lineTo(275,625);
                    context.moveTo(275,625);
                    context.lineTo(250,600);
                    context.moveTo(275,625);
                    context.lineTo(300,600);
                }
                // 北左拐
                if (northLeft.light == "green") {
                    context.moveTo(350,125);
                    context.lineTo(350,275);
                    context.moveTo(350,275);
                    context.lineTo(475,400);
                    context.moveTo(475,400);
                    context.lineTo(625,400);
                    context.moveTo(625,400);
                    context.lineTo(600,425);
                    context.moveTo(625,400);
                    context.lineTo(600,375);
                }
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
