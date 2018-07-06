import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col,
  Dropdown,
  Menu,
  Icon,
  Avatar,
} from 'antd';

import styles from './styles.css';

class HeaderView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    username: PropTypes.string,
    onPoweroff: PropTypes.func,
  }
  _handleMenuClick({ key }) {
    const { onPoweroff } = this.props;
    if (key === 'logout') typeof onPoweroff === 'function' && onPoweroff();
  }
  render() {
    this._handleMenuClick = this._handleMenuClick.bind(this);
    const { title, username } = this.props;
    return (
      <Layout.Header className={styles['header']}>
        <Row type="flex" justify="space-between">
          <Col xs={0} sm={0} md={12}>
            <div style={{ marginLeft: '12px' }}>{title}</div>
          </Col>
          <Col xs={0} sm={0} md={12}>
            <section className={styles['right']}>
              <Dropdown overlay={(
                <Menu className={styles['menu']} selectedKeys={[]} onClick={this._handleMenuClick}>
                  <Menu.Item key="logout" disabled={true}>
                    <Icon type="logout" />退出登录
                  </Menu.Item>
                </Menu>
              )} trigger={['click']}>
                <div className={styles['action']}>
                  <Avatar size="small" icon="user" />
                  <span className={styles['name']}>{username || 'no user'}</span>
                </div>
              </Dropdown>
            </section>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default HeaderView;
