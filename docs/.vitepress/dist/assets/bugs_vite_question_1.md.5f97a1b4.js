import{_ as a,o as s,c as n,V as e}from"./chunks/framework.d048da10.js";const m=JSON.parse('{"title":"Vite 打包项目时报错 JavaScript heap out of memory","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/vite/question/1.md","filePath":"bugs/vite/question/1.md"}'),l={name:"bugs/vite/question/1.md"},t=e(`<h1 id="vite-打包项目时报错-javascript-heap-out-of-memory" tabindex="-1">Vite 打包项目时报错 JavaScript heap out of memory <a class="header-anchor" href="#vite-打包项目时报错-javascript-heap-out-of-memory" aria-label="Permalink to &quot;Vite 打包项目时报错 JavaScript heap out of memory&quot;">​</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">---</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Last</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">few</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">GCs</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">---</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[12168:00000145D1BE67B0]   199025 ms: Mark-sweep 2007.0 (2094.4) -&gt; 2003.9 (2092.6) MB, 839.6 / 0.0 ms  (average mu = 0.127, current mu = 0.006) allocation failure scavenge might not succeed</span></span>
<span class="line"><span style="color:#A6ACCD;">[12168:00000145D1BE67B0]   200197 ms: Mark-sweep 2006.9 (2095.3) -&gt; 2003.7 (2092.6) MB, 1152.5 / 0.0 ms  (average mu = 0.074, current mu = 0.017) allocation failure scavenge might not succeed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;--- JS stacktrace ---&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1: 00007FF65D44815F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+114079</span></span>
<span class="line"><span style="color:#A6ACCD;"> 2: 00007FF65D3D54C6 DSA_meth_get_flags+65542</span></span>
<span class="line"><span style="color:#A6ACCD;"> 3: 00007FF65D3D637D node::OnFatalError+301</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4: 00007FF65DD0BA0E v8::Isolate::ReportExternalAllocationLimitReached+94</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5: 00007FF65DCF5FED v8::SharedArrayBuffer::Externalize+781</span></span>
<span class="line"><span style="color:#A6ACCD;"> 6: 00007FF65DB993BC v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468</span></span>
<span class="line"><span style="color:#A6ACCD;"> 7: 00007FF65DBA6069 v8::internal::Heap::PublishPendingAllocations+1129</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8: 00007FF65DBA303A v8::internal::Heap::PageFlagsAreConsistent+2842</span></span>
<span class="line"><span style="color:#A6ACCD;"> 9: 00007FF65DB95C99 v8::internal::Heap::CollectGarbage+2137</span></span>
<span class="line"><span style="color:#A6ACCD;">10: 00007FF65DB93E50 v8::internal::Heap::AllocateExternalBackingStore+2000</span></span>
<span class="line"><span style="color:#A6ACCD;">11: 00007FF65DBB1B60 v8::internal::FreeListManyCached::Reset+1408</span></span>
<span class="line"><span style="color:#A6ACCD;">12: 00007FF65DBB2215 v8::internal::Factory::AllocateRaw+37</span></span>
<span class="line"><span style="color:#A6ACCD;">13: 00007FF65DBC7ADF v8::internal::FactoryBase&lt;v8::internal::Factory&gt;::NewRawTwoByteString+79</span></span>
<span class="line"><span style="color:#A6ACCD;">14: 00007FF65D9AB1BD v8::internal::String::SlowFlatten+477</span></span>
<span class="line"><span style="color:#A6ACCD;">15: 00007FF65D7153CB v8::internal::WasmTableObject::Fill+603</span></span>
<span class="line"><span style="color:#A6ACCD;">16: 00007FF65DD167E9 v8::String::WriteUtf8+105</span></span>
<span class="line"><span style="color:#A6ACCD;">17: 00007FF65D2EB243 v8::internal::OSROptimizedCodeCache::OSROptimizedCodeCache+37827</span></span>
<span class="line"><span style="color:#A6ACCD;">18: 00007FF65D272EBB v8::internal::compiler::Instruction::parallel_moves+603</span></span>
<span class="line"><span style="color:#A6ACCD;">19: 00007FF65DCC63E6 v8::internal::Builtins::code_handle+172790</span></span>
<span class="line"><span style="color:#A6ACCD;">20: 00007FF65DCC5FD9 v8::internal::Builtins::code_handle+171753</span></span>
<span class="line"><span style="color:#A6ACCD;">21: 00007FF65DCC629C v8::internal::Builtins::code_handle+172460</span></span>
<span class="line"><span style="color:#A6ACCD;">22: 00007FF65DCC6100 v8::internal::Builtins::code_handle+172048</span></span>
<span class="line"><span style="color:#A6ACCD;">23: 00007FF65DD99801 v8::internal::SetupIsolateDelegate::SetupHeap+494673</span></span>
<span class="line"><span style="color:#A6ACCD;">24: 00000145D41FC7B2</span></span>
<span class="line"><span style="color:#A6ACCD;"> ELIFECYCLE  Command failed with exit code 134.</span></span></code></pre></div><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>内存不足，内存溢出</p><h2 id="解决步骤" tabindex="-1">解决步骤 <a class="header-anchor" href="#解决步骤" aria-label="Permalink to &quot;解决步骤&quot;">​</a></h2><ol><li>安装以下两个依赖<code>cross-env</code>/<code>increase-memory-limit</code></li><li><code>package.json</code>增加脚本<code>&quot;fix-memory-limit&quot;: &quot;cross-env LIMIT=4096 increase-memory-limit&quot;</code>,4096如果不够可以继续增加</li><li>修改打包脚本<code>&quot;build:tzprod&quot;: &quot;pnpm fix-memory-limit &amp;&amp; rimraf dist &amp;&amp; cross-env --max_old_space_size=10000 &amp;&amp; cross-env vite build --mode tzprod&quot;</code>,执行打包前设置node内存</li></ol>`,7),o=[t];function p(i,r,c,C,A,D){return s(),n("div",null,o)}const F=a(l,[["render",p]]);export{m as __pageData,F as default};
