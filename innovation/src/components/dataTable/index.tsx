import * as React from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
import './index.scss'
import {DataTableProps} from "../../api/interface";

export class DataTable extends React.Component<DataTableProps, any> {
    render() {
        const {eastStraight ,eastLeft, northLeft, northStraight, southLeft, southStraight, westLeft, westStraight} = this.props.data;
        const dataSource = [
            {
                dataItem: '滞留车辆',
                eastStraight: eastStraight.stranded,
                eastLeft: eastLeft.stranded,
                westStraight: westStraight.stranded,
                westLeft: westLeft.stranded,
                southStraight: southStraight.stranded,
                southLeft: southLeft.stranded,
                northStraight: northStraight.stranded,
                northLeft: northLeft.stranded,
                key: 'stranded'
            },
            {
                dataItem: '车流量净变化量',
                eastStraight: eastStraight.unitGrowth - eastStraight.unitReduce,
                eastLeft: eastLeft.unitGrowth - eastLeft.unitReduce,
                westStraight: westStraight.unitGrowth - westStraight.unitReduce,
                westLeft: westLeft.unitGrowth - westLeft.unitReduce,
                southStraight: southStraight.unitGrowth - southStraight.unitReduce,
                southLeft: southLeft.unitGrowth - southLeft.unitReduce,
                northStraight: northStraight.unitGrowth - northStraight.unitReduce,
                northLeft: northLeft.unitGrowth - northLeft.unitReduce,
                key: 'unitChange'
            },
            {
                dataItem: '当前路口红绿灯',
                eastStraight: (<div className={"trafficLight-" + eastStraight.light}/>),
                eastLeft: (<div className={"trafficLight-" + eastLeft.light}/>),
                westStraight: ((<div className={"trafficLight-" + westStraight.light}/>)),
                westLeft: (<div className={"trafficLight-" + westLeft.light}/>),
                southStraight: (<div className={"trafficLight-" + southStraight.light}/>),
                southLeft: (<div className={"trafficLight-" + southLeft.light}/>),
                northStraight: (<div className={"trafficLight-" + northLeft.light}/>),
                northLeft: (<div className={"trafficLight-" + northLeft.light}/>),
                key: 'light'
            }
        ];
        const columns = [
            {
                title: '路口实时车流量数据表',
                dataIndex: 'dataItem',
                key: 'dataItem',
                width: 200
            },
            {
                title: '东',
                key: 'east',
                children:[{
                    title: '直行',
                    dataIndex: 'eastStraight',
                    key: 'eastStraight'
                },
                {
                    title: '左拐',
                    dataIndex: 'eastLeft',
                    key: 'eastLeft'
                }]
            },
            {
                title: '西',
                key: 'west',
                children:[{
                    title: '直行',
                    dataIndex: 'westStraight',
                    key: 'westStraight'
                },
                {
                    title: '左拐',
                    dataIndex: 'westLeft',
                    key: 'westLeft'
                }]
            },
            {
                title: '南',
                key: 'south',
                children:[{
                    title: '直行',
                    dataIndex: 'southStraight',
                    key: 'southStraight'
                },
                {
                    title: '左拐',
                    dataIndex: 'southLeft',
                    key: 'southLeft'
                }]
            },
            {
                title: '北',
                key: 'north',
                children:[{
                    title: '直行',
                    dataIndex: 'northStraight',
                    key: 'northStraight'
                },
                {
                    title: '左拐',
                    dataIndex: 'northLeft',
                    key: 'northLeft'
                }]
            }
        ];
        return(
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
        )
    }
}
