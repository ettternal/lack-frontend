<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!usrList || userList.length<1" description="搜索结果为空"></van-empty>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast, Toast} from "vant";
import qs from "qs";




const route = useRoute();
//取到搜索的标签
const { tags } = route.query;

//2.定义一个用户列表
const userList = ref([]);

//页面初始化好以后，执行从远程获取数据的方法
onMounted(async ()=> {
 const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params,{indices: false})
    }
  })
      .then(function (response) {
        console.log('user/search/tags', response);
        showSuccessToast('请求成功！');
        return response?.data;
      })
      .catch(function (error) {
        console.log('user/search/tags', error);
        showFailToast('请求失败！');
      })

  if(userListData){
    userListData.forEach(user => {

        user.tags = JSON.parse(user.tags);

    })
    userList.value = userListData;
  }
})


//写用户列表的样式

//1.定义假的用户
// const mockUser = {
//   id: 1234,
//   username: '二哈',
//   userAccount: 1234,
//   profile:'好好学习，天天开心，顿顿大餐，好运连连，哈哈哈哈哈哈哈哈哈~~~~~',
//   avatarUrl:'https://ts1.cn.mm.bing.net/th?id=OIP-C.J7odbcNKBU93chEgiP0hzgHaJS&w=223&h=280&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
//   gender:0,
//   phone: '13987679840',
//   email: '13987679840@qq.com',
//   userRole: 0,
//   planetCode: '1234',
//   tags:['java','打工','happy'],
//   createTime: new Date(),
// }





</script>

<style scoped>

</style>