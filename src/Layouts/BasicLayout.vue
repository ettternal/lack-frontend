<!--setup是vue3的语法塘，使用之后在script之中使用所有的变量都会暴露给也买你就不用些return语句-->
<script setup>
import {showToast, Toast} from "vant";
import {ref} from "vue";
import Index from "../pages/Index.vue";
import Teams from "../pages/Tema.vue";
const onClickLeft = () => alert('左');//定义两个方法，在上面可以用
const onClickRight = () => alert('右');

const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);


</script>

<template>
  <!-- 对组件中所有的内容进行修改-->
  <van-nav-bar
      title="标题"
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
    <template v-if="active === 'index'">
      <Index />
    </template>
    <template v-if="active === 'team'">
      <Teams />
    </template>


  </div>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>

</style>