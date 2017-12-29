## 简介
react app 创建命令集

## 安装
### 全局安装
    npm install lk-react-app-cli -g

## 使用
**注：请在项目根目录下运行**
### 创建react项目
    lk-react-app --dir <reactprojectname>
### 创建cotainer
    lk-react-app --container <containername>
### 创建jtcotainer(建投容器)
    lk-react-app --jtcontainer <containername>
### 创建component
    lk-react-app --component <componentname>
### 创建reducer
    lk-react-app --reducer <reducername>
### 创建service
    lk-react-app --service <servicename>
### 创建ui
    lk-react-app --ui <uiname>
## 升级说明
### 1.0.0
1. 第一次发布
2. fix bug: react-app --container
3. optimize: 创建文件后的提示
### 1.0.3
1. 删除app下.babelrc和.gitignore

### 1.0.4
1. fix bug: uglifyplugin

### 1.0.5
1. component/container class规范和样式规范

### 1.0.6
1. container去除immutableRenderDecorator

### 1.0.7
1. 增加rem机制
1. 修改component complex tpl
1. webpack url-loader config
1. tslint补充规则

### 1.0.8
1. 修改reducer cli, 加强接口逻辑
1. 增加reducer统一接口文件

### 1.0.9
1. 增加service cli

### 1.1.0
1. 增加jtcontainer cli

### 1.1.1
1. 调整打包脚本，支持hash，sourcemap
1. 调整reducer结构，actiontype增加命名空间

### 1.2.0
1. 增加js版本支持
1. 更改action type命名规则
1. 增加antd
1. 增加echart-for-react

### 1.2.1
1. fix service-cli bug