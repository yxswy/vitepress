# vite

## 简单配置

```typescript
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// import ElementPlus from "unplugin-element-plus/vite"
import viteCompression from "vite-plugin-compression";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path";

function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}

const root = process.cwd();

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, __dirname);
  console.log(env);
  return {
    base: env.VITE_APP_BASE,
    server: {
      host: "0.0.0.0",
      port: 5000,
      proxy: {
        "/XXX": {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
        },
        "/YYY": {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
        },
      },
    },
    root,
    plugins: [
      vue(),
      // vueJsx(),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      viteCompression(),
    ],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    optimizeDeps: {
      include: ["element-plus/lib/locale/lang/zh-cn"],
    },
    define: {
      "process.env": {},
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
};
```