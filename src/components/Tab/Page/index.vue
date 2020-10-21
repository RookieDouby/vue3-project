<template>
<div class="page-wrapper">
  <h4>{{ cityInfo.name }}</h4>
  <img :src="cityInfo.imgUrl" alt="">
  <p class="desc">{{ cityInfo.desc }}</p>
</div>
</template>

<script>
import {
  getCurrentInstance,
  computed,
} from 'vue'
export default {
  name: 'Page',
  props: {
    cityData: Array,
  },
  setup(props) {
    const {
      ctx
    } = getCurrentInstance();
    const store = ctx.$store;

    return {
      cityInfo: computed(() => props.cityData[store.state.curIndex])
    }
  },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  height: calc(100% - 50px);

  img {
    width: 100%;
  }
}
</style>
