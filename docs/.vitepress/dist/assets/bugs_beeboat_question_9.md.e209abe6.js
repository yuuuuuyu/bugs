import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.53eb7688.js";const p="/bugs/assets/9-1.b7e94062.png",o="/bugs/assets/9-2.c9f29a8f.png",b=JSON.parse('{"title":"tinymce富文本线上环境报错404","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/beeboat/question/9.md","filePath":"bugs/beeboat/question/9.md"}'),e={name:"bugs/beeboat/question/9.md"},t=l('<h1 id="tinymce富文本线上环境报错404" tabindex="-1">tinymce富文本线上环境报错404 <a class="header-anchor" href="#tinymce富文本线上环境报错404" aria-label="Permalink to &quot;tinymce富文本线上环境报错404&quot;">​</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>单独启动子应用服务tinymce可以正常使用，通过基座菜单（microapp模式）资源请求报404错误。 <img src="'+p+'" alt="tinymce富文本线上环境报错404"></p><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>tinymce的BaseURL设置问题。默认tinymce的BaseURL是相对路径，根据浏览器地址拼接成完整路径导致404。</p><h2 id="解决步骤" tabindex="-1">解决步骤 <a class="header-anchor" href="#解决步骤" aria-label="Permalink to &quot;解决步骤&quot;">​</a></h2><ol><li>判断运行环境，准备不同的baseUrl <img src="'+o+`" alt="tinymce富文本线上环境报错404"></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> baseUrl</span></span>
<span class="line"><span style="color:#6A737D;">//判断是否处于微应用模式下</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (window[</span><span style="color:#9ECBFF;">&#39;__MICRO_APP_ENVIRONMENT__&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> window[</span><span style="color:#9ECBFF;">&#39;__MICRO_APP_PUBLIC_PATH__&#39;</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//处于微应用模式下，拼接绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">window</span><span style="color:#9ECBFF;">[</span><span style="color:#9ECBFF;">&#39;__MICRO_APP_PUBLIC_PATH__&#39;</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}tinymce\`</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//非微应用模式下，拼接为相对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">initOption</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    base_url: baseUrl</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 其他配置</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> baseUrl</span></span>
<span class="line"><span style="color:#6A737D;">//判断是否处于微应用模式下</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (window[</span><span style="color:#032F62;">&#39;__MICRO_APP_ENVIRONMENT__&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> window[</span><span style="color:#032F62;">&#39;__MICRO_APP_PUBLIC_PATH__&#39;</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//处于微应用模式下，拼接绝对路径</span></span>
<span class="line"><span style="color:#24292E;">    baseUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">window</span><span style="color:#032F62;">[</span><span style="color:#032F62;">&#39;__MICRO_APP_PUBLIC_PATH__&#39;</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}tinymce\`</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//非微应用模式下，拼接为相对路径</span></span>
<span class="line"><span style="color:#24292E;">    baseUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">initOption</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    base_url: baseUrl</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 其他配置</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,8),c=[t];function r(i,y,E,_,d,m){return a(),n("div",null,c)}const h=s(e,[["render",r]]);export{b as __pageData,h as default};
