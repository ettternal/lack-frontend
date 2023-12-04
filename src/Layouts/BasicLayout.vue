<template>
  <!-- 对组件中所有的内容进行修改-->
  <van-nav-bar
      title="whale-伙伴匹配"
      left-text=" "
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

<!--中间的内容是动态变化的，应入Index，Teams页面-->
  <div id="content">
    <router-view/>
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<!--setup是vue3的语法塘，使用之后在script之中使用所有的变量都会暴露给也买你就不用些return语句-->
<script setup>
import {showToast, Toast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()
//定义两个方法，在上面可以用
const onClickLeft = () => {
  router.back()
};
// 做一个路由跳转
const onClickRight = () => {
  router.push('/Search')
};

//const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);


</script>
<style scoped>
  #content{
    padding-bottom: 50px;
  }
</style>