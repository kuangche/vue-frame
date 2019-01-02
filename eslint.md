## eslint参数说明

- extends："airbnb" 使用了eslint-config-airbnb
- parser: "babel-eslint" 对Babel解析器的包装使其与 ESLint 兼容
- parserOptions: 非es5特性下正常工作，此属性是必须的
  - sourceType: "module", 默认script，工程代码是ECMAScript模块用module
  - allowImportExportEverywhere：true 允许在程序的任何地方使用import和export
  - ecmaVersion：6 使用es6
  - jsx: true 启用JSX
  - experimentalObjectRestSpread: true 启用实验性Object rest/spread properties
- env: 环境定义了预定义的全局变量
  - browser: true browser全局变量
  - node: true Node.js全局变量和Node.js作用域
  - es6: 支持除模块外所有ECMAScript 6特性（该选项会自动设置ecmaVersion解析器选项为6）
- globals: 使用的全局变量，变量等于true允许亦是被重写，false不允许被重写  
- rules: 项目中使用的规则(http://eslint.cn/docs/rules/)
  - off或0 关闭规则
  - warn或1 开启规则，使用警告级别的错误，不会导致程序退出
  - error或2 开启规则，使用错误级别的错误，程序退出
  
  ### 基本规则
  - 大括号风格要求
   'brace-style': [
       'error',
       '1tbs', {
           'allowSingleLine': true
       }
   ],
  - 一条语句也使用大括号
   'curly': 'error',
  - 变量名使用驼峰形式
   'camelcase': 'error',
  - 必须使用===和!==
   'eqeqeq': 'error',
  - 禁止扩展原生对象
   'no-extend-native': 'error',
  - 禁用__proto__
   'no-proto': 'error',
  - 禁用 caller 或 callee
   'no-caller': 'error',
  - 构造函数首字母大写
   'new-cap': 'error',
  - 与null进行比较同样使用===和!==
   'no-eq-null': 'error',
  - 强制操作符使用一致的换行符风格
   'operator-linebreak': 'error',
  - 不允许多个空行，默认2个空行
   'no-multiple-empty-lines': 'error',
  - 可以使用空格和tab混合缩进
   'no-mixed-spaces-and-tabs': 'off',
  - 在一元操作符之前或之后存在空格
   'space-unary-ops': 'error',
  - 禁止出现多个空格
   'no-multi-spaces': 'error',
  - 禁止使用令人困惑的多行表达式
   'no-unexpected-multiline': 'error',
  - 强制关键字周围空格的一致性
   'keyword-spacing': 'error',
  - 要求中缀操作符周围有空格
   'space-infix-ops': 'error',
  - 强制逗号前没有空格，逗号后追回一个空格
   'comma-spacing': [
       'error', {
           'before': false,
           'after': true
       }
   ],
  - 立即执行函数用括号包裹起来
   'wrap-iife': 'error',
  - 禁用不必要的分号
   'no-extra-semi': 'error',
  - 强制分号前没有空格，后有空格
   'semi-spacing': 'error',
  - 注释-或/*必须跟随一个空格
   'spaced-comment': 'error',
  
  - nodejs
  - 把var语句看作是在块级作用域范围之内
   'block-scoped-var': 'error',
  - 禁止require()调用与普通变量声明混合使用
   'no-mixed-requires': 'error',
  - 禁止new require()的写法
   'no-new-require': 'error',
  
  - reactjs
  - webpack别名启用，(eslint-import-resolver-webpack解决)
   'import/no-unresolved': 'error'
