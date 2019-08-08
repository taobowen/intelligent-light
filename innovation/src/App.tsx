import React from 'react';
import {Layout, Divider} from "antd";
import './App.scss';
import {DataSet} from "./components/dataSet";
import {DataTable} from "./components/dataTable";
import {Simulation} from "./components/simulation";
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
        <Layout>
            <Header className="header-title">
                智能交通管理系統
            </Header>
            <Content style={{padding: '50px 50px 0'}}>
                <Layout  style={{ padding: '24px 100px', background: '#fff' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Simulation/>
                    </Content>
                    <Sider width={700} style={{ background: '#fff' }}>
                        <DataSet/>
                        <Divider />
                        <DataTable/>
                    </Sider>
                </Layout>
            </Content>
            <Footer>
                中南大學 - 智能科学与技术 - 陶博闻
            </Footer>
        </Layout>
    </div>
  );
};

export default App;
