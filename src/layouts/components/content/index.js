import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
} from 'antd';
import Scrollbars from 'react-custom-scrollbars';

import styles from './styles.css';

class ContentView extends Component {
  static propTypes = {
    dom: PropTypes.element.isRequired,
  }
  render() {
    const { dom } = this.props;
    return (
      <Scrollbars className={styles['layout']}>
        <Layout.Content className={styles['content']}>{dom}</Layout.Content>
      </Scrollbars>
    );
  }
}

export default ContentView;
