import{_ as a,c as n,o as s,a as t}from"./app.315daad1.js";const g='{"title":"Provide-Inject","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801"},{"level":2,"title":"\u8865\u5145","slug":"\u8865\u5145"}],"relativePath":"Vue/Provide-Inject/index.md","lastUpdated":1640060787118}',e={},p=t(`<h1 id="provide-inject" tabindex="-1">Provide-Inject <a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a></h1><p>vue-next</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><blockquote><p>packages\\runtime-core\\src\\apiInject.ts</p></blockquote><h2 id="\u8865\u5145" tabindex="-1">\u8865\u5145 <a class="header-anchor" href="#\u8865\u5145" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u65B9\u5F0F\u5C31\u662F\u5C06\u9700\u8981\u5B58\u50A8\u7684\u6570\u636E\u653E\u5165\u5230<code>this.$</code>\u5F53\u4E2D\uFF0C\u518D\u53D6\u51FA\u6765\u3002</p><p>\u5F53\u4F60\u6253\u5370\u7684\u65F6\u5019\u4F60\u53EF\u4EE5\u4ECE <code>this.$.provides</code> \u4E2D\u67E5\u770B\u6570\u636E</p>`,9),o=[p];function c(i,l,u,r,d,k){return s(),n("div",null,o)}var _=a(e,[["render",c]]);export{g as __pageData,_ as default};