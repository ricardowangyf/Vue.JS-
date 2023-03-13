<template>
  <div class="warpper">
    <div>路由实例</div>
    <div class="router">
      <router-link active-class="wyf" to="/">首页</router-link>
      <router-link active-class="wyf" to="/good">好的</router-link>
      <router-link active-class="wyf" to="/about">关于</router-link>
      <router-link active-class="wyf" to="/user/1">鞋子</router-link>
      <router-link active-class="wyf" to="/user/2">帽子</router-link>
    </div>
    <!--定义路由插座-->
    <router-view></router-view>
    <div class="footer">
      <p>
        提供的内容仅用于培训和测试，不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关。版权所有，保留一切权利。
      </p>
      <div>
        <a href="#">使用条款</a><a href="#">隐私条款</a>
        <a href="#">沪ICP备000000号</a> <a href="#">技术支持：王宇飞</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.warpper {
  max-width: 980px;
  margin: 0 auto;
}
.router {
  background: #e8e7e3;
}
.router a {
  display: inline-block;
  padding: 13px 20px;
  font-weight: bold;
  text-decoration: auto;
}
.router-link-exact-active {
  color: #fff;
  background: #3f3f3f;
}

.footer {
  font-size: 12px;
  text-align: center;
}
.footer p {
  background: #e8e7e3;
  padding: 10px 18px;
}
.footer div a {
  color: #333;
  padding: 0 5px;
}
.footer div a:hover {
  color: #0028f3;
}
</style>