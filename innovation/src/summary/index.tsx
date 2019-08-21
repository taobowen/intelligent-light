import * as React from "react";
import {Divider, Layout} from "antd";
import 'antd/dist/antd.css';
import {Simulation} from "../components/simulation";
import {DataSet} from "../components/dataSet";
import {DataTable} from "../components/dataTable";
import {CrossroadsData, Direction} from "../share/constant";
import {SummaryState} from "../api/interface";

const { Content, Sider } = Layout;

export class Summary extends React.Component<{}, SummaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            eastStraight: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "green",
                stranded: 1
            },
            eastLeft: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "green",
                stranded: 1
            },
            westStraight: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
            westLeft: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
            southStraight: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
            southLeft: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
            northStraight: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
            northLeft: {
                unitGrowth: 1,
                unitReduce: 1,
                light: "red",
                stranded: 1
            },
        }
    }

    setData = (value: number, direction: string, changeDataType: string) => {
        const {eastStraight,eastLeft,westStraight,westLeft,southStraight,southLeft,northStraight,northLeft} = this.state;
        if (changeDataType === CrossroadsData.unitGrowth){
            switch (direction) {
                case Direction.eastStraight:
                    eastStraight.unitGrowth = value;
                    this.setState({eastStraight: eastStraight});
                    return;
                case Direction.eastLeft:
                    eastLeft.unitGrowth = value;
                    this.setState({eastLeft: eastLeft});
                    return;
                case Direction.westStraight:
                    westStraight.unitGrowth = value;
                    this.setState({northStraight: northStraight});
                    return;
                case Direction.westLeft:
                    westLeft.unitGrowth = value;
                    this.setState({northLeft: northLeft});
                    return;
                case Direction.southStraight:
                    southStraight.unitGrowth = value;
                    this.setState({southStraight: southStraight});
                    return;
                case Direction.southLeft:
                    southLeft.unitGrowth = value;
                    this.setState({southLeft: southLeft});
                    return;
                case Direction.northStraight:
                    northStraight.unitGrowth = value;
                    this.setState({northStraight: northStraight});
                    return;
                case Direction.northLeft:
                    northLeft.unitGrowth = value;
                    this.setState({northLeft: northLeft});
                    return;
                default:
                    return;
            }
        } else if (changeDataType === CrossroadsData.unitReduce){
            switch (direction) {
                case Direction.eastStraight:
                    eastStraight.unitReduce = value;
                    this.setState({eastStraight: eastStraight});
                    return;
                case Direction.eastLeft:
                    eastLeft.unitReduce = value;
                    this.setState({eastLeft: eastLeft});
                    return;
                case Direction.westStraight:
                    westStraight.unitReduce = value;
                    this.setState({northStraight: northStraight});
                    return;
                case Direction.westLeft:
                    westLeft.unitReduce = value;
                    this.setState({northLeft: northLeft});
                    return;
                case Direction.southStraight:
                    southStraight.unitReduce = value;
                    this.setState({southStraight: southStraight});
                    return;
                case Direction.southLeft:
                    southLeft.unitReduce = value;
                    this.setState({southLeft: southLeft});
                    return;
                case Direction.northStraight:
                    northStraight.unitReduce = value;
                    this.setState({northStraight: northStraight});
                    return;
                case Direction.northLeft:
                    northLeft.unitReduce = value;
                    this.setState({northLeft: northLeft});
                    return;
                default:
                    return;
            }
        }
    };

    render() {
        return (
            <Layout  style={{ padding: '24px 100px', background: '#fff' }}>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Simulation data={this.state}/>
                </Content>
                <Sider width={700} style={{ background: '#fff' }}>
                    <DataSet dataChange={this.setData} />
                    <Divider />
                    <DataTable data={this.state}/>
                </Sider>
            </Layout>
        );
    }
}
