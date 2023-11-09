import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.399ceeb1.js";const h=JSON.parse('{"title":"Pinia 持久化处理","description":"","frontmatter":{},"headers":[],"relativePath":"skills/vue3.x/pinia.md","filePath":"skills/vue3.x/pinia.md"}'),l={name:"skills/vue3.x/pinia.md"},o=p(`<h1 id="pinia-持久化处理" tabindex="-1">Pinia 持久化处理 <a class="header-anchor" href="#pinia-持久化处理" aria-label="Permalink to &quot;Pinia 持久化处理&quot;">​</a></h1><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>在部分场景下，某些数据需要一直保持，不被浏览器刷新所干扰，此时就需要处理pinia的持久化，要解决这个问题非常简单，在状态改变时将其同步到浏览器的存储中，如 cookie、localStorage、sessionStorage 。每次初始化状态时从存储中去获取初始值即可。</p><p>当前从第三方依赖角度实现pinia的持久化<code>pinia-plugin-persistedstate</code></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pnpm add pinia</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">plugin</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">persistedstate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 main.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPinia } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> piniaPluginPersistedstate </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia-plugin-persistedstate&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pinia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPinia</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">pinia.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(piniaPluginPersistedstate)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(pinia)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pnpm add pinia</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">plugin</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">persistedstate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用 main.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> piniaPluginPersistedstate </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia-plugin-persistedstate&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pinia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">pinia.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(piniaPluginPersistedstate)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(pinia)</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, s{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      someState: </span><span style="color:#9ECBFF;">&#39;hello pinia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nested: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#9ECBFF;">&#39;nested pinia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  persist: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;main&#39;</span><span style="color:#24292E;">, s{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      someState: </span><span style="color:#032F62;">&#39;hello pinia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      nested: {</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#032F62;">&#39;nested pinia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  persist: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ol><li>模块做了持久化后，以后数据会不会变，怎么办？ <ol><li>先读取本地的数据，如果新的请求获取到新数据，会自动把新数据覆盖掉旧的数据。</li><li>无需额外处理，插件会自己更新到最新数据</li></ol></li></ol><h2 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h2><ol><li>不想所有数据都持久化处理，能不能按需持久化所需数据</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;main&#39;</span><span style="color:#E1E4E8;">, s{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      someState: </span><span style="color:#9ECBFF;">&#39;hello pinia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nested: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#9ECBFF;">&#39;nested pinia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 持久化存储插件其他配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  persist: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 修改存储中使用的键名称，默认为当前 Store的 id</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;storekey&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 修改为 sessionStorage，默认为 localStorage</span></span>
<span class="line"><span style="color:#E1E4E8;">    storage: window.sessionStorage,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)</span></span>
<span class="line"><span style="color:#E1E4E8;">    paths: [</span><span style="color:#9ECBFF;">&#39;nested.data&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;main&#39;</span><span style="color:#24292E;">, s{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      someState: </span><span style="color:#032F62;">&#39;hello pinia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      nested: {</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#032F62;">&#39;nested pinia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 持久化存储插件其他配置</span></span>
<span class="line"><span style="color:#24292E;">  persist: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 修改存储中使用的键名称，默认为当前 Store的 id</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;storekey&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 修改为 sessionStorage，默认为 localStorage</span></span>
<span class="line"><span style="color:#24292E;">    storage: window.sessionStorage,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)</span></span>
<span class="line"><span style="color:#24292E;">    paths: [</span><span style="color:#032F62;">&#39;nested.data&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p><a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/" target="_blank" rel="noreferrer">https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/</a></p>`,15),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
