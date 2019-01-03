## 配置须知

#### 环境依赖：

- `node`

#### 安装额外依赖

```bash
npm install package_name -S
npm install package_name -D
```

## 启动调试环境

```bash
npm run start
```

## 打包代码

```bash
npm run dll
npm run build
```

## 提交规范
```
格式：<type>(<scope>): <subject>

type: 用于说明commit的类别，中允许使用以下7个标识。
      feat：新功能（feature）
      fix：修补bug
      docs：文档（documentation）
      style： 格式（不影响代码运行的变动）
      refactor：重构（即不是新增功能，也不是修改bug的代码变动）
      test：增加测试
      chore：构建过程或辅助工具的变动
scope: 用于说明commit的影响范围，比如store,view,根据不同位置来决定。
subject: 是commit的简短描述，不超过50个字符。
      1.以动词开头，使用第一人称现在时，比如change，而不是changed或changes
      2.第一个字母小写
      3.结尾不加句号（.）

可以参考：http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
```
