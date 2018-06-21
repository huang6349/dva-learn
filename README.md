# dva-learn

[![](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![](https://img.shields.io/badge/ant--design-^3.6.3-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![](https://img.shields.io/badge/dva-^2.3.1-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

学习dva框架

## 目录

- [初始化项目](./docs/初始化项目.md)
- [使用Antd](./docs/使用Antd.md)
- [组件动态加载](./docs/组件动态加载.md)
- [编译后的文件名带hash，防止浏览器缓存](./docs/编译后的文件名带hash，防止浏览器缓存.md)

## 代码风格规范

## routes
```jsx
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from './styles.css';

class Page extends PureComponent {
  const { message } = this.props.app;
  render() {
    return (
      <section className={styles['layout']}>
        <span>消息：{ message }</span>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { app: state['app'] };
}

export default connect(mapStateToProps)(Page);
```

## components

通过 `npm` 安装 `prop-types`，规定 `props` 的数据类型

```bash
$ npm install prop-types --save
```

```jsx
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class View extends PureComponent {
  static propTypes = {
    num: PropTypes.number,
  }
  static defaultProps = {
    num: 0,
  }
  state = {
    message: '数字',
  }
  render() {
    const { num } = this.props;
    const { message } = this.state;
    return (
      <section className={styles['layout']}>
        <span>{ message }：{ num }</span>
      </section>
    );
  }
}

export default View;
```

增加 `./components/index.js`，使用组件更方便导入

```jsx
export { default as View } from './View';
```

组件导入方式

```jsx
import { View } from '../components';
```

## 开源协议

[MIT](https://tldrlegal.com/license/mit-license)
