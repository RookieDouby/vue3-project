<template>
<div class="about">
  <input type="text" placeholder="请搜索" @input="searchAction($event)">
  {{searchResult}}
  <ul v-if="searchResult.length > 0">
    <li v-for="(item, index) in searchResult" :key="index">
      <div>
        <img :src="item.img" :alt="item.courseName">
        <h1>{{ item.courseName }}</h1>
      </div>
    </li>
  </ul>
  <ul v-else>
    <li v-for="(item, index) in courseData" :key="index">
      <div>
        <img :src="item.img" :alt="item.courseName">
        <h1>{{ item.courseName }}</h1>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import courseData from '@/data/courseData'
import {
  throttle
} from '@/libs/utils'

import {
  reactive,
  toRefs,
} from 'vue';

export default {
  name: 'search',
  setup() {
    const state = reactive({
      searchResult: [],
    })

    const searchAction = throttle((e) => {
      const inputVal = e.target.value;
      state.searchResult = courseData.filter(item => item.courseName.includes(inputVal))
      console.log('searchResult', state.searchResult)
    }, 500)
    return {
      ...toRefs(state),
      courseData,
      searchAction,
    }
  },
}
</script>
