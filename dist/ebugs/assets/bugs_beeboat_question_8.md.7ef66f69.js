import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.4310c879.js";const l="/ebugs/assets/8-1.3c3ebedf.png",o="/ebugs/assets/8-2.feae493b.png",h=JSON.parse('{"title":"子应用刷新后pinia数据被清空","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/beeboat/question/8.md","filePath":"bugs/beeboat/question/8.md"}'),e={name:"bugs/beeboat/question/8.md"},t=p('<h1 id="子应用刷新后pinia数据被清空" tabindex="-1">子应用刷新后pinia数据被清空 <a class="header-anchor" href="#子应用刷新后pinia数据被清空" aria-label="Permalink to &quot;子应用刷新后pinia数据被清空&quot;">​</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>在应用场景内，功能中用到获取pinia数据，刷新当前功能pinia被清空，如图： <img src="'+l+'" alt="子应用刷新后pinia数据被清空"><img src="'+o+`" alt="子应用刷新后pinia数据被清空"></p><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>BeeboatUI实例化的对外提供自定义缓存的方法<code>mountedCustomCatchData</code>，如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BtApplication</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 构造函数 先执行第一步init()</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">options</span><span style="color:#6A737D;"> 选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IAppOptions</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重写自定义缓存数据</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mountedCustomCatchData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">loadCacheData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 方法要是同步请求，加载缓存数据，例如当前用户信息、部门信息、数据字典信息等</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadCacheData</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.pluginsHandlers) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.</span><span style="color:#B392F0;">isType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;api&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// other....</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BtApplication</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 构造函数 先执行第一步init()</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">options</span><span style="color:#6A737D;"> 选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IAppOptions</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(options)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重写自定义缓存数据</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mountedCustomCatchData</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">loadCacheData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 方法要是同步请求，加载缓存数据，例如当前用户信息、部门信息、数据字典信息等</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadCacheData</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.pluginsHandlers) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.</span><span style="color:#6F42C1;">isType</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;api&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> item.</span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// other....</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在子应用开发过程中，自定义类并继承了BeeboatUI提供的<code>BtApplication</code>类，并重写了<code>mountedCustomCatchData</code>，重写的方法体存在问题，甚至并没有重写，只是吧方法列出来了，如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserApplication</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BtApplication</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** 重构 微服务加载方法 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initMicroApp</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// something</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重写自定义缓存数据</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mountedCustomCatchData</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserApplication</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BtApplication</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(options)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** 重构 微服务加载方法 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initMicroApp</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// something</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 重写自定义缓存数据</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mountedCustomCatchData</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>BtApplication</code>被继承后，实例化<code>UserApplication</code>的时候就会进入重写的自定义缓存的方法，但又没处理缓存数据，导致pinia数据丢失</p><h2 id="解决步骤" tabindex="-1">解决步骤 <a class="header-anchor" href="#解决步骤" aria-label="Permalink to &quot;解决步骤&quot;">​</a></h2><ol><li>如果有业务需求重写<code>mountedCustomCatchData</code>，那就按实际需求处理该方法</li><li>如果仅仅是处理microapp初始化，那不必要的方法重写不要去写</li></ol>`,11),c=[t];function r(E,y,i,d,A,F){return n(),a("div",null,c)}const u=s(e,[["render",r]]);export{h as __pageData,u as default};