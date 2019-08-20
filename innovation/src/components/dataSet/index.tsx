import {Tabs, Slider, InputNumber, Row, Col, Divider} from 'antd';
import * as React from "react";
import 'antd/dist/antd.css';
import './index.scss'
import {CrossroadsData} from "../../share/constant";
const {TabPane} = Tabs;

interface DataSetProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void
}

interface TabPaneContentProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void,
    direction: string
}

interface IntegerStepProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void,
    direction: string,
    changeDataType: string
}

export class IntegerStep extends React.Component<IntegerStepProps,any> {
    state = {
        inputValue: 1,
    };

    onChange = (value:any) => {
        this.setState({
            inputValue: value,
        });
        this.props.dataChange(value,this.props.direction,this.props.changeDataType);
    };

    render() {
        const {inputValue} = this.state;
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={12} style={{margin: "10px"}}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={inputValue}
                        />
                    </Col>
                    < Col span = {4} >
                        <InputNumber
                            min = {1}
                            max = {20}
                            style = {
                                {
                                    marginLeft: 16
                                }
                            }
                            value = {inputValue}
                            onChange = {this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export class TabPaneContent extends React.Component<TabPaneContentProps, any> {
    render() {
        return (
            <div>
                <h2>直行</h2>
                <div className="formItem-title">单位时间增加车流量</div>
                <IntegerStep direction={this.props.direction+"Straight"} dataChange={this.props.dataChange} changeDataType={CrossroadsData.unitGrowth}/>
                <div className="formItem-title">单位时间减少车流量</div>
                <IntegerStep direction={this.props.direction+"Straight"} dataChange={this.props.dataChange} changeDataType={CrossroadsData.unitReduce}/>
                <Divider />
                <h2>左拐</h2>
                <div className="formItem-title">单位时间增加车流量</div>
                <IntegerStep direction={this.props.direction+"Left"} dataChange={this.props.dataChange} changeDataType={CrossroadsData.unitGrowth}/>
                <div className="formItem-title">单位时间减少车流量</div>
                <IntegerStep direction={this.props.direction+"Left"} dataChange={this.props.dataChange} changeDataType={CrossroadsData.unitReduce}/>
            </div>
        );
    }
}

export class DataSet extends React.Component<DataSetProps, any> {
    render() {
        return (
            <div className="dataSet">
                <Tabs
                    type="card">
                    <TabPane tab="东"
                             key="1">
                        <TabPaneContent direction="east" dataChange={this.props.dataChange}/>
                    </TabPane>
                    <TabPane
                        tab="南"
                        key="2">
                        <TabPaneContent direction="south" dataChange={this.props.dataChange}/>
                    </TabPane>
                    <TabPane
                        tab="西"
                        key="3">
                        <TabPaneContent direction="west" dataChange={this.props.dataChange}/>
                    </TabPane>
                    <TabPane
                        tab="北"
                        key="4">
                        <TabPaneContent direction="north" dataChange={this.props.dataChange}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
