import * as React from "react";
import {Table} from "antd";
import './index.scss'

export class DataTable extends React.Component {
    render() {
        const dataSource = [
            {
                dataItem: '滞留车辆',
                eastStraight: 123,
                eastLeft: 321,
                westStraight: 132,
                westLeft: 231,
                southStraight: 456,
                southLeft: 654,
                northStraight: 789,
                northLeft: 987
            },
            {
                dataItem: '车流量净变化量',
                eastStraight: 123,
                eastLeft: 321,
                westStraight: 132,
                westLeft: 231,
                southStraight: 456,
                southLeft: 654,
                northStraight: 789,
                northLeft: 987
            },
            {
                dataItem: '当前路口红绿灯',
                eastStraight: (<div className="trafficLight-green"/>),
                eastLeft: (<div className="trafficLight-red"/>),
                westStraight: ((<div className="trafficLight-red"/>)),
                westLeft: (<div className="trafficLight-red"/>),
                southStraight: (<div className="trafficLight-green"/>),
                southLeft: (<div className="trafficLight-green"/>),
                northStraight: (<div className="trafficLight-green"/>),
                northLeft: (<div className="trafficLight-green"/>)
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