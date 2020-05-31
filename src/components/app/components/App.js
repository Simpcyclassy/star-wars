import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';

const { Content } = Layout;

class App extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Navbar />
                <Content>{children}</Content>
            </Layout>
        );
    }
}

export default withRouter(App);
