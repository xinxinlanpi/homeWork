import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Footer, Content } = Layout;

export default class App extends Component {
    state = {
        current: '/'
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <Layout>

                    <Header>
                        {/* <Router history={history} routes={routes} /> */}
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['index']}
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}

                        >
                            <Menu.Item key="index">
                                <Link to="index"><span><Icon type="home" /><span>index</span></span></Link>
                            </Menu.Item>
                            <Menu.Item key="foo">
                                <Link to="foo"><span><Icon type="mail" /><span>foo</span></span></Link>
                            </Menu.Item>
                            <Menu.Item key="bar">
                                <Link to="bar"><span><Icon type="mail" /><span>bar</span></span></Link>
                            </Menu.Item>
                            <Menu.Item key="antd">
                                <Link to="antd"><span><Icon type="mail" /><span>antd</span></span></Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        {/* <DevTools /> */}
                        {/* <Breadcrumb style={{ margin: '16px 20px' }}>
                            <Breadcrumb.Item>index</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div className="site-layout-content">
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }} >
                        <div className='m-test-button'>myfoot</div>
                    </Footer>
                </Layout>
                {/* <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/">Redux</Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/index" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>计数器</Link>
                            </li>
                            <li>
                                <Link to="/foo" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>静态数据</Link>
                            </li>
                            <li>
                                <Link to="/bar" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>动态数据</Link>
                            </li>
                            <li>
                                <Link to="/antd" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>结合antd</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div> */}
            </div>
        )
    }
}