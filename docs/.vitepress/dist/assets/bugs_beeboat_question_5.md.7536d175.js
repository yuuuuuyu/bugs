import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d048da10.js";const C=JSON.parse('{"title":"BtTableEx高级搜索报错 senceDataList.forEach is not a function","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/beeboat/question/5.md","filePath":"bugs/beeboat/question/5.md"}'),o={name:"bugs/beeboat/question/5.md"},p=l(`<h1 id="bttableex高级搜索报错-sencedatalist-foreach-is-not-a-function" tabindex="-1">BtTableEx高级搜索报错 senceDataList.forEach is not a function <a class="header-anchor" href="#bttableex高级搜索报错-sencedatalist-foreach-is-not-a-function" aria-label="Permalink to &quot;BtTableEx高级搜索报错 senceDataList.forEach is not a function&quot;">​</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>使用BtTableEx后控制console报错信息如下:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Uncaught</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> promise) </span><span style="color:#FFCB6B;">TypeError</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> senceDataList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">forEach is not a </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loadTableSence</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">index.js</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">7886</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>项目内重写了高级搜索的handle类，方法返回值存在问题。具体报错位置如下:</p><p>入参 <code>userId</code>,<code>deviceType</code>,<code>pageId</code> 查询当前页面、当前帐号下的高级搜索方案。实际结果返回的数据有问题</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getSence</span><span style="color:#A6ACCD;">(id: string) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">UserConfigApi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getByDeviceAndUserIdOfPage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            userId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BtUserTokenInfo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUserId</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            deviceType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            pageId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VITE_APP_CODE</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">configText</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;font-style:italic;">// 返回结果有问题</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">configText</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="解决步骤" tabindex="-1">解决步骤 <a class="header-anchor" href="#解决步骤" aria-label="Permalink to &quot;解决步骤&quot;">​</a></h2><p><code>src/usage/handler/sence-handler.ts</code></p><ol><li>检查SenceHandler类中的saveSence方法</li><li>检查SenceHandler类中的getSence方法</li></ol>`,11),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
