import * as React from "react";
import {Divider, Layout} from "antd";
import {Simulation} from "../components/simulation";
import {DataSet} from "../components/dataSet";
import {DataTable} from "../components/dataTable";
import {CrossroadsData, Direction} from "../share/constant";
import {string} from "prop-types";

const { Content, Sider } = Layout;

interface DirectionData {
    light: string,
    unitGrowth: number,
    unitReduce: number,
    stranded: number,
}

interface SummaryState {
    eastStraight: DirectionData,
    eastLeft: DirectionData,
    westStraight: DirectionData,
    westLeft: DirectionData,
    southStraight: DirectionData,
    southLeft: DirectionData,
    northStraight: DirectionData,
    northLeft: DirectionData
}

class Summary extends React.Component<{}, SummaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            eastStraight: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            eastLeft: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            westStraight: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            westLeft: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            southStraight: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            southLeft: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            northStraight: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
            northLeft: {
                unitGrowth: 0,
                unitReduce: 0,
                light: "red",
                stranded: 0
            },
        }
    }

    componentDidMount(): void {

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
                    <Simulation/>
                </Content>
                <Sider width={700} style={{ background: '#fff' }}>
                    <DataSet dataChange={this.setData}/>
                    <Divider />
                    <DataTable/>
                </Sider>
            </Layout>
        );
    }
}