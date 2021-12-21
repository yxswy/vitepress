# vue-next + ts + setup 的代码风格

## 父子传参

正常 `ts` 判断类型

```vue
<script setup lang="ts">
interface Props {
  x?: number;
}
const props = defineProps<Props>();
</script>
```

附带默认值

```vue
<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
  x?: number;
}
const props = withDefaults(defineProps<Props>(), {
  x: 2017,
});
</script>
```

## 文件上传

### 文件类型

```typescript
// DragEvent 拖动类型
function handleChange(e: DragEvent) {
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;
  uploadFiles(files);
}
```

## Axios

src 下创建 `shims.d.ts` 文件，内容如下:

全局的类型，控制 axios 返回结果的控制

```typescript
import { AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}
```

### 使用

```typescript
import axios from "axios";
const request = axios.create();
const fn = () => {
  return request.get<{ msg: string }>("");
};
fn().then((res) => {
  console.log(res.msg);
});

fnNext().then((res) => {
  console.log(res.msg2);
});

const fnNext = () => {
  return request<{ msg2: string }>({
    url: "",
    method: "post",
  });
};
```

### 不使用全局创建的 .d.ts 文件

```typescript
import axios, { AxiosError, AxiosInstance } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "@/hooks/useToken";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/",
  timeout: 7000,
});

const _delQuery: any[] = ["", null, undefined];

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (!config.headers) config.headers = {};
    const token = getToken();
    token && (config.headers["access_token"] = token);

    if (config.data) {
      const data = config.data;
      for (const k in data) {
        if (_delQuery.indexOf(data[k]) > -1) {
          delete config.data[k];
        }
      }
    }

    if (config.params) {
      const params = config.params;
      for (const k in params) {
        if (params[k] === "") {
          delete config.params[k];
        }
      }
    }

    return config;
  }
);

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
});

export function server<T = any>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<AxiosResponse<T>>(config)
      .then((res: AxiosResponse<T>) => {
        resolve(res as unknown as Promise<T>);
      })
      .catch((e: Error | AxiosError) => {
        reject(e);
      });
  });
}

export default axiosInstance;
```
