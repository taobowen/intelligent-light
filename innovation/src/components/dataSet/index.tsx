import {Tabs, Slider, InputNumber, Row, Col} from 'antd';
import * as React from "react";
import 'antd/dist/antd.css'
import './index.scss'
const {TabPane} = Tabs;

export class IntegerStep extends React.Component {
    state = {
        inputValue: 1,
    };

    onChange = (value:any) => {
        // console.log(value);
        this.setState({
            inputValue: value,
        });
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

export class TabPaneContent extends React.Component {
    render() {
        return (
            <div>
                <div className="formItem-title">单位时间增加车流量</div>
                <IntegerStep/>
                <div className="formItem-title">单位时间减少车流量</div>
                <IntegerStep/>
            </div>
        );
    }
}

export class DataSet extends React.Component {
    render() {
        return (
            <div className="dataSet">
                <Tabs
                    type="card">
                    <TabPane tab="东"
                             key="1">
                        <TabPaneContent/>
                    </TabPane>
                    <TabPane
                        tab="南"
                        key="2">
                        <TabPaneContent/>
                    </TabPane>
                    <TabPane
                        tab="西"
                        key="3">
                        <TabPaneContent/>
                    </TabPane>
                    <TabPane
                        tab="北"
                        key="4">
                        <TabPaneContent/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}