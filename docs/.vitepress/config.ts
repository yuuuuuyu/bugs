import {UserConfig} from 'vitepress'
import {demoBlockPlugin} from 'vitepress-theme-demoblock'
import nav from './config/nav'
import sidebar from './config/sidebar'

const config: UserConfig = {
    themeConfig: {
        nav,
        sidebar,
        logo: '/logo.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present yuzhiyong'
        }
    },

    title: 'bugs',
    lang: 'zh-CN',
    description: 'bug大集合',

    markdown: {
        config: md => {
            md.use(demoBlockPlugin, {
                customStyleTagName: 'style lang="scss"', // style标签会解析为<style lang="scss"><style>
            })
        }
    }
}

export default config
