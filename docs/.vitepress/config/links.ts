export const notes = [
  {
    text: "Vue",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "Vue3中ref和reactive的区别",
        link: "/notes/vue/05Vue3中ref和reactive的区别",
      },
      {
        text: "组合式函数",
        link: "/notes/vue/04组合式函数",
      },
      {
        text: "Vue2和Vue3的区别",
        link: "/notes/vue/03Vue2和Vue3的区别",
      },
      {
        text: "Vue2不能监听数组下标的原因",
        link: "/notes/vue/02Vue2不能监听数组下标的原因",
      },
      {
        text: "Vue3的Diff算法",
        link: "/notes/vue/01Vue3的diff算法",
      },
    ],
  },
  {
    text: "ES6+",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "Promise基础",
        link: "notes/es/01Promise基础",
      },
      {
        text: "ES6+如何创建私有变量",
        link: "/notes/八股文/es/01创建私有变量",
      },
      {
        text: "TypeScript和JavaScript的区别",
        link: "/notes/八股文/es/02ts和js的区别",
      },
    ],
  },
  {
    text: "浏览器",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "EventLoop",
        link: "/notes/browser/01浏览器事件循环",
      },
    ],
  },
  {
    text: "JavaScript",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "JS事件循环机制",
        link: "/notes/js/01JS事件循环",
      },
      {
        text: "原型/原型链",
        link: "/notes/js/02原型链",
      },
      {
        text: "===和==的区别",
        link: "/notes/八股文/js/01===和==的区别",
      },
      {
        text: "事件循环进阶",
        link: "/notes/八股文/js/02事件循环进阶",
      },
      {
        text: "闭包和IIFE",
        link: "/notes/八股文/js/03闭包和IIFE",
      },
    ],
  },
  {
    text: "九阴真经",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "JavaScript",
        link: "/notes/八股文/js/03JS题.md",
      },
    ],
  },
]

export const bugs = [
  {
    text: "ElementPlus",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "Pagination分页器默认英文",
        link: "/bugs/elementplus/question/1",
      },
      {
        text: "ElementPlus升级后多语言报错",
        link: "/bugs/elementplus/question/2",
      },
    ],
  },
  {
    text: "Beeboat",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "蜂舟拖拽表格列名不显示中文",
        link: "/bugs/beeboat/question/1",
      },
      {
        text: "MicroApp基座切换应用跳转登录",
        link: "/bugs/beeboat/question/2",
      },
      {
        text: "表格高亮异常/排序后序号列异常",
        link: "/bugs/beeboat/question/3",
      },
      {
        text: "BtTable2修改表格列名不生效",
        link: "/bugs/beeboat/question/4",
      },
      {
        text: "senceDataList.forEach is not a function..",
        link: "/bugs/beeboat/question/5",
      },
      {
        text: "蜂舟列设置左/右冻结不生效",
        link: "/bugs/beeboat/question/6",
      },
      {
        text: "蜂舟平台表格展示的数据和接口返回不一致",
        link: "/bugs/beeboat/question/7",
      },
      {
        text: "子应用刷新后pinia数据被清空",
        link: "/bugs/beeboat/question/8",
      },
      {
        text: "tinymce富文本线上环境报错404",
        link: "/bugs/beeboat/question/9",
      },
    ],
  },
  {
    text: "Vite",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "打包报错 JavaScript heap out of memory",
        link: "/bugs/vite/question/01JavaScriptHeapOutOfMemory",
      },
      {
        text: "打包报错 ENOENT: no such file or directory, scandir xxxxx",
        link: "/bugs/vite/question/02NoSuchFileOrDirectoryScandir",
      },
      {
        text: "打包报错 [vite]: Rollup failed to resolve import xxxxx",
        link: "/bugs/vite/question/03RollupFailedToResolveImport",
      },
      {
        text: "使用了CommonJS模块该如何处理",
        link: "/bugs/vite/question/04使用了CommonJS模块该如何处理",
      },
    ],
  },
  {
    text: "Vue",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "Vue3 项目启动报错isFunction is not a function",
        link: "/bugs/vue/question/1",
      },
    ],
  },
]

export const skills = [
  {
    text: "Beeboat v2.0",
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "async/await在蜂舟上妙用",
        link: "/skills/v2/07await在蜂舟上妙用",
      },
      {
        text: "Vue文件中监听Class中的变量",
        link: "/skills/v2/06Vue文件中监听Class中的变量",
      },
      {
        text: "使用代码片段重写表格列",
        link: "/skills/v2/01使用代码片段重写表格列",
      },
      {
        text: "使用代码片段实现动态列",
        link: "/skills/v2/02使用代码片段实现动态列",
      },
      {
        text: "使用代码片段实现表头合并",
        link: "/skills/v2/03使用代码片段实现表头合并",
      },
      {
        text: "重写组件事件/属性",
        link: "/skills/v2/04重写组件事件",
      },
      {
        text: "重写组件事件使用emit",
        link: "/skills/v2/05重写组件事件使用emit",
      },
      {
        text: "[逻辑事件系列1] 通过判断行数据指定字段来控制按钮的禁用启用",
        link: "/skills/v2/logic/1",
      },
      {
        text: "[逻辑事件系列2] 通过判断表格多选数据来控制按钮的禁用启用",
        link: "/skills/v2/logic/2",
      },
    ],
  },
  {
    text: "Beeboat v3.0",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "新组件",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "新增的弹窗组件如何使用",
            link: "/skills/v3/01弹窗组件的使用",
          },
        ],
      },
      {
        text: "后端逻辑编排",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "后端逻辑编排",
            link: "/skills/v3/10后端逻辑编排",
          },
        ],
      },
      {
        text: "前端逻辑编排",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "前端逻辑编排-模板",
            link: "/skills/v3/12前端逻辑编排模板的使用",
          },
          {
            text: "从pinia中取值",
            link: "/skills/v3/14从pinia中取值",
          },
        ],
      },
      {
        text: "如何配置带入参的数据源",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "表格的数据源改造",
            link: "/skills/v3/02表格的数据源改造",
          },
          {
            text: "表单的数据源改造",
            link: "/skills/v3/03表单的数据源改造",
          },
          {
            text: "下拉框的数据源改造",
            link: "/skills/v3/04下拉框的数据源改造",
          },
          {
            text: "下拉树的数据源改造",
            link: "/skills/v3/05下拉树的数据源改造",
          },
          {
            text: "树的数据源改造",
            link: "/skills/v3/06树的数据源改造",
          },
        ],
      },
      {
        text: "业务场景demo",
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: "左右联动的逻辑事件",
            link: "/skills/v3/07左右联动的逻辑事件",
          },
          {
            text: "表单多个下拉级联的逻辑事件",
            link: "/skills/v3/08表单多个下拉级联的逻辑事件",
          },
          {
            text: "表单form-item中多个表单元素",
            link: "/skills/v3/15form-item组件",
          },
          {
            text: "弹窗组件中使用自定义组件",
            link: "/skills/v3/09弹窗组件中使用自定义组件",
          },
          {
            text: "表格行内编辑",
            link: "/skills/v3/11行内编辑功能使用",
          },
          {
            text: "表格批量删除&变量进阶",
            link: "/skills/v3/13变量进阶使用",
          },
        ],
      },
    ],
  },
  {
    text: "Beeboat v4.0",
    collapsible: false,
    collapsed: false,
    items: [
      {
        text: "demo",
        link: "/skills/v4/demo",
      },
    ],
  },
]

