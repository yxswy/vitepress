import{_ as s,c as n,o as a,a as t}from"./app.d283e5b5.js";const y='{"title":"Typescript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61"}],"relativePath":"Typescript/index.md","lastUpdated":1640256211252}',p={},e=t(`<h1 id="typescript" tabindex="-1">Typescript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><h2 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Obj</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,4),o=[e];function c(l,r,i,k,u,d){return a(),n("div",null,o)}var h=s(p,[["render",c]]);export{y as __pageData,h as default};