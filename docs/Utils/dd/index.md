# 其他业务

## 钉钉鉴权

### node (express)

一下使用仅能使用于前端自研，如果使用到线上，必崩

> https://www.cnblogs.com/zhang90030/p/9569515.html 参考地址 可以实现

在使用前需要将服务端的 `ip` 放到开发者平台内项目中的白名单里

```javascript
const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");

const app = express();

const QD_URL = "http://xxx.xxx.xxx.xxx:XXXX/"; // 前端网址
const appkey = "xx";
const appsecret = "xxx";

app.get("/getToken", (req, res) => {
  axios({
    url: "https://oapi.dingtalk.com/gettoken",
    params: {
      appkey: appkey,
      appsecret: appsecret,
    },
  }).then((result) => {
    const access_token = result.data.access_token;
    axios({
      url: "https://oapi.dingtalk.com/get_jsapi_ticket",
      params: { access_token },
    }).then((result) => {
      const ticket = result.data.ticket;
      const nonce = "xxx";
      const timestamp = Date.now();
      const signature = getJsApiSingnature(ticket, nonce, timestamp, QD_URL);

      res.send({ signature, ticket, nonce, timestamp, url: QD_URL });
    });
  });
});

function getJsApiSingnature(ticket, nonce, timeStamp, url) {
  let plainTex =
    "jsapi_ticket=" +
    ticket +
    "&noncestr=" +
    nonce +
    "&timestamp=" +
    timeStamp +
    "&url=" +
    url;
  let signature = CryptoJS.SHA1(plainTex).toString();
  return signature;
}

app.listen(3300, () => {
  console.log("http://xxxxxxxxxxxxx:3300");
});
```

### 前端

展示地图

```javascript
dd.config({
  agentId: "", // 必填，微应用ID
  corpId: "", //必填，企业ID
  timeStamp: 后端传, // 必填，生成签名的时间戳
  nonceStr: 后端传, // 必填，自定义固定字符串。
  signature: 后端传, // 必填，签名
  type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；
  // 不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
  jsApiList: [
    "runtime.info",
    "biz.contact.choose",
    "device.notification.confirm",
    "device.notification.alert",
    "device.notification.prompt",
    "biz.ding.post",
    "biz.util.openLink",
    "biz.map.view",
  ], // 必填，需要使用的jsapi列表，注意：不要带dd。
});

dd.error(function (err) {
  alert("dd error: " + JSON.stringify(err));
}); //该方法必须带上，用来捕获鉴权出现的异常信息，否则不方便排查出现的问题

dd.ready(function () {
  // dd.ready参数为回调函数，在环境准备就绪时触发，
  // jsapi的调用需要保证在该回调函数触发后调用，否则无效。
  dd.runtime.permission.requestAuthCode({
    corpId: "", // 企业ID
    onSuccess: function (result) {
      console.log(result);
    },
    onFail: function (err) {
      console.log(err);
    },
  });
  dd.biz.map.view({
    latitude: 39.903578, // 纬度
    longitude: 116.473565, // 经度
    title: "北京国家广告产业园", // 地址/POI名称
    onSuccess: function (res) {
      // 调用成功时回调
      console.log(res);
    },
    onFail: function (err) {
      // 调用失败时回调
      console.log(err);
    },
  });
});
```
