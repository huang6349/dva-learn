import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';

import styles from './styles.css';

class FooterView extends Component {
  static propTypes = {
    version: PropTypes.string || PropTypes.number,
  }
  static defaultProps = {
    version: '0.0.0',
  }
  render() {
    const { version } = this.props;
    return (
      <Layout.Footer className={styles['footer']}>
        <div className={styles['version']}>v{version}</div>
      </Layout.Footer>
    );
  }
}

export default FooterView;
