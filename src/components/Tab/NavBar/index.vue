<template>
<div class="nav-wrapper">
  <NavItem v-for="(item, index) in navData" :key="index" :index="index" :city="item" />
</div>
</template>

<script>
import NavItem from './NavItem';

export default {
  name: 'NavBar',
  components: {
    NavItem,
  },
  props: {
    navData: Array,
  },
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
