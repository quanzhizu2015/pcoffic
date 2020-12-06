<template>
  <div id="app">
    <FloatMenu/>
    <router-view></router-view>
    
  </div>
</template>



<style>
/*
      vw + vh + rem
      100vw = 屏幕宽度
      100vh = 屏幕高度
      1rem = 1个html的字体大小
      不同的屏幕大小下。页面都可以完整的显示
      根据屏幕的宽度，页面的内容 可以进行 等比的缩放
  */

* {
  box-sizing: border-box;
}

html {
  /* html的字体大小为屏幕宽度的 7.5分之一 */
  font-family: "PingFangSC-Medium", "PingFang SC", "Microsoft YaHei",
    "SansSerif";
  font-size: 6.666vw;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dd {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a,
button,
input,
textarea {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  outline: none;
  border: none;
  padding: 0;
}
/* WebKit browsers  */

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 0.26rem;
  color: #999999;
}

textarea:focus {
  outline: none;
}

img {
  vertical-align: middle;
  width: 100%;
}

body * {
  -webkit-text-size-adjust: none;
}

body {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow-x: hidden;
  font-size: 0.32rem;
  background: #f7f7f7;
  min-height: 100vh;
}

.marginBottom28 {
  margin-bottom: 0.28rem;
}

.marginBottom20 {
  margin-bottom: 0.2rem;
}

.marginTop20 {
  margin-top: 0.2rem;
}

.content-wrap {
  padding-top: 0.9rem;
}

.btn {
  width: 6.9rem;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #ffffff;
  font-size: 0.3rem;
  background: #bac8ff;
}

.btn.active {
  background: #607df0;
}

.clear {
  clear: both;
}

.van-overlay {
  background-color: rgba(51, 51, 51, 0.4025) !important;
}

input[disabled] {
  color: #666666;
  opacity: 1;
  -webkit-text-fill-color: #666666;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #666666;
  opacity: 0.5;
}
.nomore {
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
