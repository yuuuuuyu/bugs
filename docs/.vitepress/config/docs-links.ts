const docsLinks = [
    {
        text: '前端ui库',
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: '开始',
                items: [
                    {
                        text: '安装使用',
                        link: 'docs/quick-start/'
                    }, {
                        text: '变更日志',
                        link: 'docs/change-log/'
                    },
                ]
            },
            {
                text: '主题',
                items: [
                    {
                        text: 'bee-theme 主题',
                        link: 'docs/components/bee-theme/'
                    }
                ]
            },
            {
                text: '通用',
                items: [
                    {
                        text: 'Button 按钮',
                        link: 'docs/components/button/'
                    },
                    {
                        text: 'Splitter 容器',
                        link: 'docs/components/splitter/'
                    },
                    {
                        text: 'Table 组件',
                        link: 'docs/components/table/'
                    },
                    {
                        text: 'Select 组件',
                        link: 'docs/components/select/'
                    }, {
                        text: 'Icon 组件',
                        link: 'docs/components/icon/'
                    }, {
                        text: 'SvgIcon 组件',
                        link: 'docs/components/svg-icon/'
                    }, {
                        text: 'Label 组件',
                        link: 'docs/components/label/'
                    }, {
                        text: 'DictStatus 组件',
                        link: 'docs/components/dict-status/'
                    }, {
                        text: 'Radio组件',
                        link: 'docs/components/radio/'
                    }, {
                        text: 'CheckBox组件',
                        link: 'docs/components/check-box/'
                    }, {
                        text: 'Cascader组件',
                        link: 'docs/components/cascader/'
                    }, {
                        text: 'TreeTransfer组件',
                        link: 'docs/components/tree-transfer/'
                    }, {
                        text: 'TabsAnchor组件',
                        link: 'docs/components/tabs-anchor/'
                    }, {
                        text: 'Group组件',
                        link: 'docs/components/group/'
                    },
                ]
            },
            {
                text: '上传',
                items: [
                    {
                        text: 'upload图片、视频上传',
                        link: 'docs/components/upload/'
                    }, {
                        text: 'fileUpload文件上传',
                        link: 'docs/components/file-upload/'
                    },
                ]
            }, {
                text: '其他',
                items: [
                    {
                        text: 'preview 预览',
                        link: 'docs/components/preview/'
                    }
                ]
            },
        ]
    }, {
        text: '前端使用手册',
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: '简介',
                link: 'docs/back-end-document/beeboat/view'
            }, {
                text: '模块管理',
                link: 'docs/back-end-document/beeboat/module'
            }, {
                text: '页面管理',
                link: 'docs/beeboat-platform/page'
            }, {
                text: '路由管理',
                link: 'docs/beeboat-platform/router'
            },
        ]
    }, {
        text: '后端使用手册',
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: '简介',
                link: 'docs/back-end-document/beeboat/view'
            },
            {
                text: '模块管理',
                link: 'docs/back-end-document/beeboat/module'
            },
            {
                text: '实体管理',
                link: 'docs/back-end-document/beeboat/entity-view',
                items: [
                    {
                        text: '实体',
                        link: 'docs/back-end-document/beeboat/entity'
                    }, {
                        text: '实体关系',
                        link: 'docs/back-end-document/beeboat/entity-relation'
                    }, {
                        text: '实体属性',
                        link: 'docs/back-end-document/beeboat/entity-field'
                    }, {
                        text: '实体公共能力',
                        link: 'docs/back-end-document/beeboat/entity-common'
                    },
                ]
            },
            {
                text: '接口管理',
                link: 'docs/back-end-document/beeboat/method-view',
                items: [
                    {
                        text: '接口',
                        link: 'docs/back-end-document/beeboat/method'
                    },
                    {
                        text: '接口入参',
                        link: 'docs/back-end-document/beeboat/method-param'
                    },
                    {
                        text: '接口出参',
                        link: 'docs/back-end-document/beeboat/method-result'
                    },
                    {
                        text: '接口过滤/分组',
                        link: 'docs/back-end-document/beeboat/method-filter-group'
                    }, {
                        text: '接口排序',
                        link: 'docs/back-end-document/beeboat/method-order'
                    },
                ]
            }, {
                text: '变更日志',
                link: 'docs/back-end-document/beeboat/change-log'
            },
        ]
    }, {
        text: '后端封装库',
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: '简介',
                link: 'docs/back-end-document/kit/view'
            },
            {
                text: '快速开始',
                link: 'docs/back-end-document/kit/start'
            },
            {
                text: 'Api文档',
                link: 'docs/back-end-document/kit/doc'
            },
            {
                text: 'beeboat-runtime-base-kit',
                items: [
                    {
                        text: '工具类',
                        link: 'docs/back-end-document/runtime-base-kit/base/tool'
                    },
                    {
                        text: '异常',
                        link: 'docs/back-end-document/runtime-base-kit/base/error'
                    },
                    {
                        text: '用户令牌',
                        link: 'docs/back-end-document/runtime-base-kit/base/userToken'
                    },
                    {
                        text: 'MVC基类',
                        link: 'docs/back-end-document/runtime-base-kit/base/mvc'
                    }, {
                        text: '校验对象',
                        link: 'docs/back-end-document/runtime-base-kit/base/validator'
                    }, {
                        text: '缓存',
                        link: 'docs/back-end-document/runtime-base-kit/base/cache'
                    }, {
                        text: '静态参数',
                        link: 'docs/back-end-document/runtime-base-kit/base/variables'
                    },

                ]
            }, {
                text: 'beeboat-runtime-kit',
                items: [
                    {
                        text: '工具类',
                        link: 'docs/back-end-document/runtime-kit/tools/base'
                    }, {
                        text: '缓存',
                        link: 'docs/back-end-document/runtime-kit/cache/base'
                    }, {
                        text: 'MVC',
                        link: 'docs/back-end-document/runtime-kit/mvc/mvc'
                    }, {
                        text: '配置基类',
                        items: [
                            {
                                text: 'Mybatis',
                                link: 'docs/back-end-document/runtime-kit/config/mybatis'
                            }, {
                                text: 'other',
                                link: 'docs/back-end-document/runtime-kit/config/other'
                            },
                        ]
                    },
                ]
            },
        ]
    }
]
export default docsLinks
