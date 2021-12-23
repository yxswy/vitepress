import{_ as n,c as s,o as a,a as t}from"./app.d283e5b5.js";const g='{"title":"\u5176\u4ED6\u4E1A\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9489\u9489\u9274\u6743","slug":"\u9489\u9489\u9274\u6743"},{"level":3,"title":"node (express)","slug":"node-express"},{"level":3,"title":"\u524D\u7AEF","slug":"\u524D\u7AEF"}],"relativePath":"Utils/dd/index.md","lastUpdated":1640256211252}',p={},o=t(`<h1 id="\u5176\u4ED6\u4E1A\u52A1" tabindex="-1">\u5176\u4ED6\u4E1A\u52A1 <a class="header-anchor" href="#\u5176\u4ED6\u4E1A\u52A1" aria-hidden="true">#</a></h1><h2 id="\u9489\u9489\u9274\u6743" tabindex="-1">\u9489\u9489\u9274\u6743 <a class="header-anchor" href="#\u9489\u9489\u9274\u6743" aria-hidden="true">#</a></h2><h3 id="node-express" tabindex="-1">node (express) <a class="header-anchor" href="#node-express" aria-hidden="true">#</a></h3><p>\u4E00\u4E0B\u4F7F\u7528\u4EC5\u80FD\u4F7F\u7528\u4E8E\u524D\u7AEF\u81EA\u7814\uFF0C\u5982\u679C\u4F7F\u7528\u5230\u7EBF\u4E0A\uFF0C\u5FC5\u5D29</p><blockquote><p><a href="https://www.cnblogs.com/zhang90030/p/9569515.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zhang90030/p/9569515.html</a> \u53C2\u8003\u5730\u5740 \u53EF\u4EE5\u5B9E\u73B0</p></blockquote><p>\u5728\u4F7F\u7528\u524D\u9700\u8981\u5C06\u670D\u52A1\u7AEF\u7684 <code>ip</code> \u653E\u5230\u5F00\u53D1\u8005\u5E73\u53F0\u5185\u9879\u76EE\u4E2D\u7684\u767D\u540D\u5355\u91CC</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;axios&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CryptoJS <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto-js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">QD_URL</span> <span class="token operator">=</span> <span class="token string">&quot;http://xxx.xxx.xxx.xxx:XXXX/&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u524D\u7AEF\u7F51\u5740</span>
<span class="token keyword">const</span> appkey <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> appsecret <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/getToken&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://oapi.dingtalk.com/gettoken&quot;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
      appkey<span class="token operator">:</span> appkey<span class="token punctuation">,</span>
      appsecret<span class="token operator">:</span> appsecret<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> access_token <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>access_token<span class="token punctuation">;</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&quot;https://oapi.dingtalk.com/get_jsapi_ticket&quot;</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token punctuation">{</span> access_token <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ticket <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>ticket<span class="token punctuation">;</span>
      <span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> signature <span class="token operator">=</span> <span class="token function">getJsApiSingnature</span><span class="token punctuation">(</span>ticket<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> <span class="token constant">QD_URL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> signature<span class="token punctuation">,</span> ticket<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token constant">QD_URL</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getJsApiSingnature</span><span class="token punctuation">(</span><span class="token parameter">ticket<span class="token punctuation">,</span> nonce<span class="token punctuation">,</span> timeStamp<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> plainTex <span class="token operator">=</span>
    <span class="token string">&quot;jsapi_ticket=&quot;</span> <span class="token operator">+</span>
    ticket <span class="token operator">+</span>
    <span class="token string">&quot;&amp;noncestr=&quot;</span> <span class="token operator">+</span>
    nonce <span class="token operator">+</span>
    <span class="token string">&quot;&amp;timestamp=&quot;</span> <span class="token operator">+</span>
    timeStamp <span class="token operator">+</span>
    <span class="token string">&quot;&amp;url=&quot;</span> <span class="token operator">+</span>
    url<span class="token punctuation">;</span>
  <span class="token keyword">let</span> signature <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">SHA1</span><span class="token punctuation">(</span>plainTex<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> signature<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3300</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;http://xxxxxxxxxxxxx:3300&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u524D\u7AEF" tabindex="-1">\u524D\u7AEF <a class="header-anchor" href="#\u524D\u7AEF" aria-hidden="true">#</a></h3><p>\u5C55\u793A\u5730\u56FE</p><div class="language-javascript"><pre><code>dd<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  agentId<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u5FAE\u5E94\u7528ID</span>
  corpId<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u5FC5\u586B\uFF0C\u4F01\u4E1AID</span>
  timeStamp<span class="token operator">:</span> \u540E\u7AEF\u4F20<span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u751F\u6210\u7B7E\u540D\u7684\u65F6\u95F4\u6233</span>
  nonceStr<span class="token operator">:</span> \u540E\u7AEF\u4F20<span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u81EA\u5B9A\u4E49\u56FA\u5B9A\u5B57\u7B26\u4E32\u3002</span>
  signature<span class="token operator">:</span> \u540E\u7AEF\u4F20<span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u7B7E\u540D</span>
  type<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//\u9009\u586B\u30020\u8868\u793A\u5FAE\u5E94\u7528\u7684jsapi,1\u8868\u793A\u670D\u52A1\u7A97\u7684jsapi\uFF1B</span>
  <span class="token comment">// \u4E0D\u586B\u9ED8\u8BA4\u4E3A0\u3002\u8BE5\u53C2\u6570\u4ECEdingtalk.js\u76840.8.3\u7248\u672C\u5F00\u59CB\u652F\u6301</span>
  jsApiList<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;runtime.info&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;biz.contact.choose&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;device.notification.confirm&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;device.notification.alert&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;device.notification.prompt&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;biz.ding.post&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;biz.util.openLink&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;biz.map.view&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u9700\u8981\u4F7F\u7528\u7684jsapi\u5217\u8868\uFF0C\u6CE8\u610F\uFF1A\u4E0D\u8981\u5E26dd\u3002</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dd<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;dd error: &quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BE5\u65B9\u6CD5\u5FC5\u987B\u5E26\u4E0A\uFF0C\u7528\u6765\u6355\u83B7\u9274\u6743\u51FA\u73B0\u7684\u5F02\u5E38\u4FE1\u606F\uFF0C\u5426\u5219\u4E0D\u65B9\u4FBF\u6392\u67E5\u51FA\u73B0\u7684\u95EE\u9898</span>

dd<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// dd.ready\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u73AF\u5883\u51C6\u5907\u5C31\u7EEA\u65F6\u89E6\u53D1\uFF0C</span>
  <span class="token comment">// jsapi\u7684\u8C03\u7528\u9700\u8981\u4FDD\u8BC1\u5728\u8BE5\u56DE\u8C03\u51FD\u6570\u89E6\u53D1\u540E\u8C03\u7528\uFF0C\u5426\u5219\u65E0\u6548\u3002</span>
  dd<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>permission<span class="token punctuation">.</span><span class="token function">requestAuthCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    corpId<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F01\u4E1AID</span>
    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onFail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dd<span class="token punctuation">.</span>biz<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    latitude<span class="token operator">:</span> <span class="token number">39.903578</span><span class="token punctuation">,</span> <span class="token comment">// \u7EAC\u5EA6</span>
    longitude<span class="token operator">:</span> <span class="token number">116.473565</span><span class="token punctuation">,</span> <span class="token comment">// \u7ECF\u5EA6</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5730\u5740/POI\u540D\u79F0</span>
    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528\u6210\u529F\u65F6\u56DE\u8C03</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onFail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528\u5931\u8D25\u65F6\u56DE\u8C03</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,10),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var q=n(p,[["render",e]]);export{g as __pageData,q as default};
