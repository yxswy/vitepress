import{_ as n,c as s,o as a,a as t}from"./app.d283e5b5.js";const g='{"title":"\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"Vite/Config/index.md","lastUpdated":1640256211252}',p={},o=t(`<h1 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>element \u914D\u7F6E</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UserConfigExport<span class="token punctuation">,</span> ConfigEnv<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import ElementPlus from &quot;unplugin-element-plus/vite&quot;</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-compression&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/resolvers&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import vueJsx from &quot;@vitejs/plugin-vue-jsx&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> UserConfigExport <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> __dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    base<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE</span><span class="token punctuation">,</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      host<span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
      port<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;/XXX&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/YYY&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    root<span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// vueJsx(),</span>
      <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        resolvers<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            importStyle<span class="token operator">:</span> <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
      alias<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          find<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          replacement<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
      preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        scss<span class="token operator">:</span> <span class="token punctuation">{</span>
          additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;@/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/lib/locale/lang/zh-cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    define<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;process.<wbr>env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    build<span class="token operator">:</span> <span class="token punctuation">{</span>
      terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        compress<span class="token operator">:</span> <span class="token punctuation">{</span>
          drop_console<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          drop_debugger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,4),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{g as __pageData,v as default};
