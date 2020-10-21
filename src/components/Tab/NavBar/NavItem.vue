<template>
<div :class="['nav-item', {'active': curIndex === index}]" @click="changeCityInfo">{{ city }}</div>
</template>

<script>
import {
  getCurrentInstance,
  computed
} from 'vue'
export default {
  name: 'NavItem',
  props: {
    city: String,
    index: Number,
  },
  setup(props) {
    const {
      ctx
    } = getCurrentInstance();
    const store = ctx.$store;

    const changeCityInfo = () => {
      store.commit('changeCityInfo', props.index)
    }

    return {
      changeCityInfo,
      curIndex: computed(() => store.state.curIndex)
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  width: 25%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, .06);
  }

  &.active {
    background-color: #000;
    color: #fff;
  }
}
</style>
