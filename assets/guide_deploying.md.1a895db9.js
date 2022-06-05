import{_ as s,j as n,g as a,G as e}from"./chunks/framework.791f7e63.js";var l="/assets/vercel-configuration.e8badd11.png";const h='{"title":"Deploying","description":"","frontmatter":{},"headers":[{"level":2,"title":"Build and test locally","slug":"build-and-test-locally"},{"level":2,"title":"GitHub Pages","slug":"github-pages"},{"level":2,"title":"GitHub Pages and Travis CI","slug":"github-pages-and-travis-ci"},{"level":2,"title":"GitLab Pages and GitLab CI","slug":"gitlab-pages-and-gitlab-ci"},{"level":2,"title":"Netlify","slug":"netlify"},{"level":2,"title":"Google Firebase","slug":"google-firebase"},{"level":2,"title":"Surge","slug":"surge"},{"level":2,"title":"Heroku","slug":"heroku"},{"level":2,"title":"Vercel","slug":"vercel"}],"relativePath":"guide/deploying.md","lastUpdated":1654442127000}',p={name:"guide/deploying.md"},o=e(`<h1 id="deploying" tabindex="-1">Deploying <a class="header-anchor" href="#deploying" aria-hidden="true">#</a></h1><p>The following guides are based on some shared assumptions:</p><ul><li>You are placing your docs inside the <code>docs</code> directory of your project;</li><li>You are using the default build output location (<code>.vitepress/dist</code>);</li><li>VitePress is installed as a local dependency in your project, and you have setup the following npm scripts:</li></ul><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="build-and-test-locally" tabindex="-1">Build and test locally <a class="header-anchor" href="#build-and-test-locally" aria-hidden="true">#</a></h2><p>You may run <code>yarn docs:build</code> command to build the docs.</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn docs:build</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>By default, the build output will be placed at <code>.vitepress/dist</code>. You may deploy this <code>dist</code> folder to any of your preferred platforms.</p><p>Once you&#39;ve built the docs, you may test them locally by running <code>yarn docs:serve</code> command.</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">$ yarn docs:serve</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The <code>serve</code> command will boot up local static web server that serves the files from <code>.vitepress/dist</code> at <code>http://localhost:5000</code>. It&#39;s an easy way to check if the production build looks OK in your local environment.</p><p>You may configure the port of the server py passing <code>--port</code> flag as an argument.</p><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs --port 8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Now the <code>docs:serve</code> method will launch the server at <code>http://localhost:8080</code>.</p><h2 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><ol><li><p>Set the correct <code>base</code> in <code>docs/.vitepress/config.js</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit <code>base</code> as it defaults to <code>&#39;/&#39;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&#39;/&lt;REPO&gt;/&#39;</code>.</p></li><li><p>Inside your project, create <code>deploy.sh</code> with the following content (with highlighted lines uncommented appropriately), and run it to deploy:</p></li></ol><div class="language-bash line-numbers-mode"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># abort on errors</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># build</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># navigate into the build output directory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># if you are deploying to a custom domain</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># if you are deploying to https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># if you are deploying to https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git main:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also run the above script in your CI setup to enable automatic deployment on each push.</p></div><h2 id="github-pages-and-travis-ci" tabindex="-1">GitHub Pages and Travis CI <a class="header-anchor" href="#github-pages-and-travis-ci" aria-hidden="true">#</a></h2><ol><li><p>Set the correct <code>base</code> in <code>docs/.vitepress/config.js</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME or GROUP&gt;.github.io/</code>, you can omit <code>base</code> as it defaults to <code>&#39;/&#39;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME or GROUP&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&#39;/&lt;REPO&gt;/&#39;</code>.</p></li><li><p>Create a file named <code>.travis.yml</code> in the root of your project.</p></li><li><p>Run <code>yarn</code> or <code>npm install</code> locally and commit the generated lockfile (that is <code>yarn.lock</code> or <code>package-lock.json</code>).</p></li><li><p>Use the GitHub Pages deploy provider template, and follow the <a href="https://docs.travis-ci.com/user/deployment/pages" target="_blank" rel="noopener noreferrer">Travis CI documentation</a>.</p></li></ol><div class="language-yaml line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_js</span></span>
<span class="line"><span style="color:#F07178;">node_js</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lts/*</span></span>
<span class="line"><span style="color:#F07178;">install</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># npm ci</span></span>
<span class="line"><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># npm run docs:build</span></span>
<span class="line"><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pages</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">skip_cleanup</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">local_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># A token generated on GitHub allowing Travis to push code on you repository.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># Set in the Travis settings page of your repository, as a secure variable.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">github_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">$GITHUB_TOKEN</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">keep_history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="gitlab-pages-and-gitlab-ci" tabindex="-1">GitLab Pages and GitLab CI <a class="header-anchor" href="#gitlab-pages-and-gitlab-ci" aria-hidden="true">#</a></h2><ol><li><p>Set the correct <code>base</code> in <code>docs/.vitepress/config.js</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME or GROUP&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&#39;/&#39;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME or GROUP&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&#39;/&lt;REPO&gt;/&#39;</code>.</p></li><li><p>Set <code>outDir</code> in <code>.vitepress/config.js</code> to <code>../public</code>.</p></li><li><p>Create a file called <code>.gitlab-ci.yml</code> in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:</p></li></ol><div class="language-yaml line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:10.22.0</span></span>
<span class="line"><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">artifacts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="netlify" tabindex="-1">Netlify <a class="header-anchor" href="#netlify" aria-hidden="true">#</a></h2><ol><li>On <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>, setup up a new project from GitHub with the following settings:</li></ol><ul><li><strong>Build Command:</strong> <code>vitepress build docs</code> or <code>yarn docs:build</code> or <code>npm run docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vitepress/dist</code></li></ul><ol start="2"><li>Hit the deploy button.</li></ol><h2 id="google-firebase" tabindex="-1">Google Firebase <a class="header-anchor" href="#google-firebase" aria-hidden="true">#</a></h2><ol><li><p>Make sure you have <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a> installed.</p></li><li><p>Create <code>firebase.json</code> and <code>.firebaserc</code> at the root of your project with the following content:</p></li></ol><p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hosting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>.firebaserc</code>:</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">projects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;YOUR_FIREBASE_ID&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>After running <code>yarn docs:build</code> or <code>npm run docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol><h2 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-hidden="true">#</a></h2><ol><li><p>First install <a href="https://www.npmjs.com/package/surge" target="_blank" rel="noopener noreferrer">surge</a>, if you haven\u2019t already.</p></li><li><p>Run <code>yarn docs:build</code> or <code>npm run docs:build</code>.</p></li><li><p>Deploy to surge by typing <code>surge docs/.vitepress/dist</code>.</p></li></ol><p>You can also deploy to a <a href="https://surge.sh/help/adding-a-custom-domain" target="_blank" rel="noopener noreferrer">custom domain</a> by adding <code>surge docs/.vitepress/dist yourdomain.com</code>.</p><h2 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-hidden="true">#</a></h2><ol><li><p>Install <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>.</p></li><li><p>Create a Heroku account by <a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">signing up</a>.</p></li><li><p>Run <code>heroku login</code> and fill in your Heroku credentials:</p></li></ol><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ heroku login</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This is the configuration of your site; read more at <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a>.</p><ol start="5"><li>Set up your Heroku git remote:</li></ol><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># version change</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My site ready for deployment.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># creates a new app with a specified name</span></span>
<span class="line"><span style="color:#A6ACCD;">$ heroku apps:create example</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># set buildpack for static sites</span></span>
<span class="line"><span style="color:#A6ACCD;">$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="6"><li>Deploy your site:</li></ol><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># publish site</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push heroku main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># opens a browser to view the Dashboard version of Heroku CI</span></span>
<span class="line"><span style="color:#A6ACCD;">$ heroku open</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="vercel" tabindex="-1">Vercel <a class="header-anchor" href="#vercel" aria-hidden="true">#</a></h2><p>To deploy your VitePress app with a <a href="https://vercel.com/docs/concepts/git" target="_blank" rel="noopener noreferrer">Vercel for Git</a>, make sure it has been pushed to a Git repository.</p><p>Go to <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">https://vercel.com/new</a> and import the project into Vercel using your Git of choice (GitHub, GitLab or BitBucket). Follow the wizard to select the project root with the project&#39;s <code>package.json</code> and override the build step using <code>yarn docs:build</code> or <code>npm run docs:build</code> and the output dir to be <code>./docs/.vitepress/dist</code></p><p><img src="`+l+'" alt="Override Vercel Configuration"></p><p>After your project has been imported, all subsequent pushes to branches will generate Preview Deployments, and all changes made to the Production Branch (commonly &quot;main&quot;) will result in a Production Deployment.</p><p>Once deployed, you will get a URL to see your app live, such as the following: <a href="https://vitepress.vercel.app" target="_blank" rel="noopener noreferrer">https://vitepress.vercel.app</a></p>',55),r=[o];function t(c,i,d,u,y,b){return a(),n("div",null,r)}var m=s(p,[["render",t]]);export{h as __pageData,m as default};
