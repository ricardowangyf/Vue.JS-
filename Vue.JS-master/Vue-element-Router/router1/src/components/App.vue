<template>
  <div class="warpper">
    <div class="router">
      <router-link to="/GameRouter">
        <button>显示</button>
      </router-link>
      <router-link active-class="wyf" to="/good">
        <button>个人信息</button>
      </router-link>
      <router-link active-class="wyf" to="/about">
        <button>留言板</button>
      </router-link>
      <router-link active-class="wyf" to="/user/1">鞋子</router-link>
      <router-link active-class="wyf" to="/user/2">帽子</router-link>
    </div>
    <!--定义路由插座-->
    <router-view></router-view>
    <div>
      <router-link to="/Fotter">  
        <button>显示</button>
      </router-link>
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>aaawww</p>
      <div>
        <a href="#">wang</a>
        <a href="#">ssssssss</a>
        <a href="#">aaaa</a>
        <a href="#">xxx</a>
      </div>
    </div>
  </div>
</template>
<style>
.warpper {
  max-width: 1980px;
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