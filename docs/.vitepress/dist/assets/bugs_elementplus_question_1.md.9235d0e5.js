import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.399ceeb1.js";const g=JSON.parse('{"title":"Pagination分页器显示英文","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/elementplus/question/1.md","filePath":"bugs/elementplus/question/1.md"}'),e={name:"bugs/elementplus/question/1.md"},o=l(`<h1 id="pagination分页器显示英文" tabindex="-1">Pagination分页器显示英文 <a class="header-anchor" href="#pagination分页器显示英文" aria-label="Permalink to &quot;Pagination分页器显示英文&quot;">​</a></h1><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>没有设置多语言</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><h3 id="方案1" tabindex="-1">方案1 <a class="header-anchor" href="#方案1" aria-label="Permalink to &quot;方案1&quot;">​</a></h3><p>针对全局设置多语言，<a href="https://element-plus.org/zh-CN/component/config-provider.html" target="_blank" rel="noreferrer">el-config-provider</a>还提供了对按钮和消息的相关设置</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import zhCn from &quot;element-plus/lib/locale/lang/zh-cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">locale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">zhCn</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;RouterView /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import zhCn from &quot;element-plus/lib/locale/lang/zh-cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">locale</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">zhCn</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;RouterView /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="方案2" tabindex="-1">方案2 <a class="header-anchor" href="#方案2" aria-label="Permalink to &quot;方案2&quot;">​</a></h3><p>针对当前组件设置多语言</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import zhCn from &quot;element-plus/lib/locale/lang/zh-cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">locale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">zhCn</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;el-pagination</span></span>
<span class="line"><span style="color:#E1E4E8;">        v-model:current-page=&quot;currentPage4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        v-model:page-size=&quot;pageSize4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        :page-sizes=&quot;[100, 200, 300, 400]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        :small=&quot;small&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        :background=&quot;background&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        layout=&quot;total, sizes, prev, pager, next, jumper&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        :total=&quot;400&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        @size-change=&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        @current-change=&quot;handleCurrentChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import zhCn from &quot;element-plus/lib/locale/lang/zh-cn&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">locale</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">zhCn</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;el-pagination</span></span>
<span class="line"><span style="color:#24292E;">        v-model:current-page=&quot;currentPage4&quot;</span></span>
<span class="line"><span style="color:#24292E;">        v-model:page-size=&quot;pageSize4&quot;</span></span>
<span class="line"><span style="color:#24292E;">        :page-sizes=&quot;[100, 200, 300, 400]&quot;</span></span>
<span class="line"><span style="color:#24292E;">        :small=&quot;small&quot;</span></span>
<span class="line"><span style="color:#24292E;">        :disabled=&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#24292E;">        :background=&quot;background&quot;</span></span>
<span class="line"><span style="color:#24292E;">        layout=&quot;total, sizes, prev, pager, next, jumper&quot;</span></span>
<span class="line"><span style="color:#24292E;">        :total=&quot;400&quot;</span></span>
<span class="line"><span style="color:#24292E;">        @size-change=&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">        @current-change=&quot;handleCurrentChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,10),p=[o];function t(c,r,i,E,u,y){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{g as __pageData,h as default};
