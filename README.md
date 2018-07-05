# dva-learn

[![](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![](https://img.shields.io/badge/ant--design-^3.6.3-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![](https://img.shields.io/badge/dva-^2.3.1-orange.svg?style=flat-square)](https://github.com/dvajs/dva)

学习dva框架

## 目录

- [初始化项目](./docs/初始化项目.md)
- [使用normalize.css重置默认浏览器样式](./docs/使用normalize.css重置默认浏览器样式.md)
- [使用Antd](./docs/使用Antd.md)
- [组件动态加载](./docs/组件动态加载.md)
- [编译后的文件名带hash，防止浏览器缓存](./docs/编译后的文件名带hash，防止浏览器缓存.md)

## 项目结构说明

- `./mock` 用来存放mock资源的文件夹
- `./public` 用来存放资源的文件夹(不会被打包编译，只会被拷贝到dist目录下)
- `./src/assets` 用来存放资源文件的文件夹（会被打包编译）
- `./src/components` 用来存放自定义组件的文件夹
- `./src/models` 用来存放数据及操作数据方法的文件夹
- `./src/routes` 用来存放界面的文件夹
- `./src/services` 用来存放服务的文件夹，如`fetch`请求
- `./src/utils` 用来存放工具类的文件夹，如`fetch`的封装类
- `./src/index.css` 公共样式
- `./src/index.js` 入口文件
- `./src/router.js` 路由配置文件

## 代码风格规范

## router

```jsx
import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'dva/router';
import dynamic from 'dva/dynamic';

export default ({ history, app }) => {
  const IndexPage = dynamic({
    app: app,
    models: () => [
      import('./models/example'),
    ],
    component: () => import('./routes/IndexPage'),
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage}></Route>
        <Redirect to="/index" />
      </Switch>
    </Router>
  );
};
```

## routes

```jsx
import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './styles.css';

class Page extends Component {
  render() {
    const { message } = this.props.app;
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class View extends Component {
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

## 相关教程

- [官网 - DvaJS](https://dvajs.com/)
- [官网 - Ant Design](https://ant.design/index-cn/)
- [官网 - react](https://reactjs.org/)
- [中文网 - react](https://doc.react-china.org/)
- [Github - DvaJS](https://github.com/dvajs/dva/)
- [Github - roadhog](https://github.com/sorrycc/roadhog/)

## 开源协议

[MIT](https://tldrlegal.com/license/mit-license)
