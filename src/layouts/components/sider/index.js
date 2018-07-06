import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
} from 'antd';

import styles from './styles.css';

class SiderView extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    width: PropTypes.number,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    width: 240,
  }
  render() {
    const { pathname, width, onClick } = this.props;
    return (
      <Layout.Sider width={width}>
        <Menu className={styles['menu']} mode="inline" selectedKeys={[pathname]} onClick={onClick}>
          <Menu.Item key="/index">首页</Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default SiderView;
