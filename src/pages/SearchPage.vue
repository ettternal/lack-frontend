<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag  closeable size="small" type="primary" @close="doclose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">已选标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding:12px">
    <van-button block type="primary" @click="toSearchResult"> 搜索 </van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import routes from "../config/route.ts";
import {useRouter} from "vue-router";

const router = useRouter()

/**
 * 执行搜索后，跳转到搜索结果页
 * 需要把当前页面的一些值带到新的页面中
 */
const toSearchResult = () => {
  router.push({
    path:'/user/list',
    query:{
      tags:activeIds.value
    }
  })
}

const searchText = ref('');

const originTagList = [{
  text: '性别',
  children: [
    { text: '男', id: '男' },
    { text: '女', id: '女' },
  ],
}, {
  text: '年级',
  children: [
    { text: '大一', id: '大一' },
    { text: '大二', id: '大二' },
    { text: '大三', id: '大三' },
    { text: '大四', id: '大四' },
    { text: '研一', id: '研一' },
    { text: '研二', id: '研二' },
  ],
},
];
//标签列表
let tagList = ref(originTagList);
/**
 *  搜索过滤
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag =>{
    const tempChildren =  [...parentTag.children];
    const tempParentTag =  {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return tempParentTag;
  })
};

//取消  清空
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};


//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//关闭标签
const  doclose = (tag) =>{
  activeIds.value = activeIds.value.filter(item =>{
    return item !== tag;
  })

}

</script>

<style scoped>

</style>