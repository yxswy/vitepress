import{_ as s,j as a,g as n,G as e}from"./chunks/framework.791f7e63.js";const F='{"title":"Carbon Ads","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-carbon-ads.md","lastUpdated":1654442127000}',p={name:"guide/theme-carbon-ads.md"},l=e(`<h1 id="carbon-ads" tabindex="-1">Carbon Ads <a class="header-anchor" href="#carbon-ads" aria-hidden="true">#</a></h1><p>VitePress has built in native support for <a href="https://www.carbonads.net/" target="_blank" rel="noopener noreferrer">Carbon Ads</a>. By defining the Carbon Ads credentials in config, VitePress will display ads on the page.</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">carbonAds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your-carbon-code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">placement</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your-carbon-placement</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>These values are used to call carbon CDN script as shown below.</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">//cdn.carbonads.com/carbon.js?serve=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&amp;placement=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">placement</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>To learn more about Carbon Ads configuration, please visit <a href="https://www.carbonads.net/" target="_blank" rel="noopener noreferrer">Carbon Ads website</a>.</p>`,6),o=[l];function r(c,t,i,D,d,y){return n(),a("div",null,o)}var C=s(p,[["render",r]]);export{F as __pageData,C as default};
