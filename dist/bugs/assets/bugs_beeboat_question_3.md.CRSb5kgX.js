import{_ as e,c as a,o as t,ac as o}from"./chunks/framework.H47pho3c.js";const r="/bugs/assets/3.BFBj2q9n.png",m=JSON.parse('{"title":"BtTable2高亮异常/列排序后序号列异常","description":"","frontmatter":{},"headers":[],"relativePath":"bugs/beeboat/question/3.md","filePath":"bugs/beeboat/question/3.md","lastUpdated":1692264040000}'),s={name:"bugs/beeboat/question/3.md"},i=o('<h1 id="bttable2高亮异常-列排序后序号列异常" tabindex="-1">BtTable2高亮异常/列排序后序号列异常 <a class="header-anchor" href="#bttable2高亮异常-列排序后序号列异常" aria-label="Permalink to &quot;BtTable2高亮异常/列排序后序号列异常&quot;">​</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p><img src="'+r+'" alt="BtTable2高亮异常/列排序后序号列异常"></p><h2 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-label="Permalink to &quot;产生原因&quot;">​</a></h2><p>BtTable2组件<code>rowKey</code>属性默认值<code>id</code>。</p><p>接口返回数据中中的id不是唯一，导致了勾选一条数据后高亮异常。同时还会造成的问题是，如果存在序号列，对某一列进行排序后，序号列的序号混乱</p><h2 id="解决步骤" tabindex="-1">解决步骤 <a class="header-anchor" href="#解决步骤" aria-label="Permalink to &quot;解决步骤&quot;">​</a></h2><ol><li>调整接口返回数据，保证id返回值唯一</li><li>为BtTable2重新设置<code>rowKey</code>值</li></ol>',8),l=[i];function c(d,n,_,b,h,p){return t(),a("div",null,l)}const f=e(s,[["render",c]]);export{m as __pageData,f as default};