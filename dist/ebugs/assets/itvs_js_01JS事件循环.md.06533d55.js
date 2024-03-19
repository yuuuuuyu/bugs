import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.4310c879.js";const p="/ebugs/assets/宏任务微任务运行.404106d0.png",A=JSON.parse('{"title":"JavaScript事件循环机制","description":"","frontmatter":{},"headers":[],"relativePath":"itvs/js/01JS事件循环.md","filePath":"itvs/js/01JS事件循环.md"}'),o={name:"itvs/js/01JS事件循环.md"},e=l('<h1 id="javascript事件循环机制" tabindex="-1">JavaScript事件循环机制 <a class="header-anchor" href="#javascript事件循环机制" aria-label="Permalink to &quot;JavaScript事件循环机制&quot;">​</a></h1><blockquote><p>换个说法：宏任务微任务是如何工作的？</p></blockquote><img src="'+p+`" alt="image-宏任务微任务运行"><ol><li><strong>直接执行同步任务</strong></li><li><strong>执行时遇到微任务时放到微任务队列中，比如Promise.then/process.nextTick等</strong></li><li><strong>执行时遇到宏任务时放到宏任务队列中，比如setTimeout/setInterval等</strong></li><li><strong>执行完同步任务</strong></li><li><strong>从微任务队列中取出第一个任务执行，重复2/3/4，微任务队列执行完成</strong></li><li><strong>从宏任务队列中取出第一个任务执行，重复2/3/4，宏任务队列执行完成</strong></li><li><strong>直到宏任务队列和微任务队列中没有待执行的任务</strong></li></ol><h2 id="输出顺序" tabindex="-1">输出顺序 <a class="header-anchor" href="#输出顺序" aria-label="Permalink to &quot;输出顺序&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1, 8, 2, 4, 7, 6, 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 1, 8, 2, 4, 7, 6, 3</span></span></code></pre></div><h2 id="过程解析" tabindex="-1">过程解析 <a class="header-anchor" href="#过程解析" aria-label="Permalink to &quot;过程解析&quot;">​</a></h2><p>按照1-7执行依次拆解</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 第一步</span></span>
<span class="line"><span style="color:#6A737D;">// 执行同步任务：输出1，8</span></span>
<span class="line"><span style="color:#6A737D;">// 此时微任务队列和宏任务队列已经存在任务</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">microTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">macroTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二步</span></span>
<span class="line"><span style="color:#6A737D;">// 取出微任务队列中的第一个任务执行，输出2</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log(2)</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(3)</span></span>
<span class="line"><span style="color:#6A737D;">// }, 0);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">microTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">macroTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第三步</span></span>
<span class="line"><span style="color:#6A737D;">// 微任务队列中已经没有待处理的任务，从宏任务队列中取出第一个任务执行，输出 4，7</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(4)</span></span>
<span class="line"><span style="color:#6A737D;">//     Promise.resolve(5).then(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//         console.log(6)</span></span>
<span class="line"><span style="color:#6A737D;">//     })</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(7)</span></span>
<span class="line"><span style="color:#6A737D;">// }, 0),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">microTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">macroTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第四步</span></span>
<span class="line"><span style="color:#6A737D;">// 经过更新微任务队列中存在待执行任务，取出继续执行，输出 6</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">microTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">macroTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第五步</span></span>
<span class="line"><span style="color:#6A737D;">// 微任务队列没任务，从宏任务队列取任务执行，输出 3</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">microTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">macroTaskQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 至此，所有任务执行完成，所以输出顺序为：1,8,2,4,7,6,3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 第一步</span></span>
<span class="line"><span style="color:#6A737D;">// 执行同步任务：输出1，8</span></span>
<span class="line"><span style="color:#6A737D;">// 此时微任务队列和宏任务队列已经存在任务</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">microTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">macroTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二步</span></span>
<span class="line"><span style="color:#6A737D;">// 取出微任务队列中的第一个任务执行，输出2</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// console.log(2)</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(3)</span></span>
<span class="line"><span style="color:#6A737D;">// }, 0);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">microTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">macroTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第三步</span></span>
<span class="line"><span style="color:#6A737D;">// 微任务队列中已经没有待处理的任务，从宏任务队列中取出第一个任务执行，输出 4，7</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(4)</span></span>
<span class="line"><span style="color:#6A737D;">//     Promise.resolve(5).then(() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">//         console.log(6)</span></span>
<span class="line"><span style="color:#6A737D;">//     })</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(7)</span></span>
<span class="line"><span style="color:#6A737D;">// }, 0),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">microTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">macroTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第四步</span></span>
<span class="line"><span style="color:#6A737D;">// 经过更新微任务队列中存在待执行任务，取出继续执行，输出 6</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">microTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">macroTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第五步</span></span>
<span class="line"><span style="color:#6A737D;">// 微任务队列没任务，从宏任务队列取任务执行，输出 3</span></span>
<span class="line"><span style="color:#6A737D;">// 此时更新微任务队列和宏任务队列</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">microTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">macroTaskQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 至此，所有任务执行完成，所以输出顺序为：1,8,2,4,7,6,3</span></span></code></pre></div>`,9),c=[e];function t(r,E,y,i,F,C){return n(),a("div",null,c)}const D=s(o,[["render",t]]);export{A as __pageData,D as default};
