import{_ as n,c as s,o as a,a as t}from"./app.d283e5b5.js";const g='{"title":"Render","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u83B7\u53D6\u53C2\u6570","slug":"\u83B7\u53D6\u53C2\u6570"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"Vue/Render/index.md","lastUpdated":1640256211252}',p={},o=t(`<h1 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u83B7\u53D6\u53C2\u6570" tabindex="-1">\u83B7\u53D6\u53C2\u6570 <a class="header-anchor" href="#\u83B7\u53D6\u53C2\u6570" aria-hidden="true">#</a></h3><p><code>this.$attrs</code> \u4E2D\u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u5C5E\u6027</p><p><code>this.$listener</code> \u4E2D\u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u4E8B\u4EF6</p><p><code>this.$slots.default</code> \u9ED8\u8BA4\u63D2\u69FD</p><p><code>{...{ attrs }}</code> \u6302\u8F7D\u5C5E\u6027\u7684\u65B9\u5F0F</p><p><code>[].map</code> \u904D\u5386\u6570\u7EC4\u6E32\u67D3\u7684\u65B9\u5F0F\u7C7B\u4F3C <code>v-for</code></p><p>\u60F3\u4F7F\u7528 <code>v-if</code> \u7684\u8BF7\u4F7F\u7528\u4E09\u76EE\u8FD0\u7B97</p><p><code>render</code> \u4E2D\u4F7F\u7528 <code>v-model</code> \u6709\u70B9\u56F0\u96BE\uFF0C\u53EF\u4EE5\u53C2\u7167 <code>react</code> \u4E2D\uFF0C\u4F7F\u7528 <code>value, onChange</code>(\u5982\u679C\u975E\u8981\u4F7F\u7528 <code>v-model</code> \u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u9700\u8981\u989D\u5916\u7684\u65B9\u5F0F\uFF0C\u4E0D\u8FC7\u5FD8\u8BB0\u4E86)</p><h3 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">renderTableColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column
          scopedSlots<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>render<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-1&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>row<span class="token punctuation">,</span> props<span class="token punctuation">.</span>$index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-&quot;</span><span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span>text<span class="token operator">-</span>transform<span class="token operator">-</span>input
                    setValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                      _that<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>row<span class="token punctuation">,</span> privateKey<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>row<span class="token punctuation">[</span>privateKey<span class="token punctuation">]</span><span class="token punctuation">}</span>
                  <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;common-table-index&quot;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>header<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>table
          data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>
          <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span> attrs <span class="token punctuation">}</span><span class="token punctuation">}</span>
          on<span class="token operator">-</span>selection<span class="token operator">-</span>change<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelectionChange<span class="token punctuation">}</span>
          v<span class="token operator">-</span>loading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>loading<span class="token punctuation">}</span>
          header<span class="token operator">-</span>cell<span class="token operator">-</span>style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            background<span class="token operator">:</span> <span class="token string">&quot;#fafafa&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>col<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderTableColumn</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>footer<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};