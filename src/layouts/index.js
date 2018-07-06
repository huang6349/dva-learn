import React from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'dva';
import {
  withRouter,
  routerRedux,
} from 'dva/router';
import {
  Header,
  Sider,
  Content,
  Footer,
} from './components';

import styles from './styles.css';

function GlobalLayout({ dispatch, children, location }) {

  function handleSiderClick({ key }) {
    dispatch(routerRedux.replace(key));
  }

  return (
    <Layout className={styles['layout']}>
      <Header title="DVA" username="H"></Header>
      <Layout>
        <Sider pathname={location['pathname']} onClick={handleSiderClick}></Sider>
        <Layout>
          <Content dom={React.cloneElement(children)}></Content>
          <Footer version="0.0.1 bata1"></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default connect()(withRouter(GlobalLayout));
