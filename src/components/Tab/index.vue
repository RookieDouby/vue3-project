<template>
<div class="tab-wrapper">
  <NavBar :navData="navData" />
  <Page :cityData="cityData" />
</div>
</template>

<script>
import NavBar from './NavBar'
import Page from './Page'

import navData from '@/data/navData'
import cityData from '@/data/cityData'

export default {
  name: 'Tab',
  components: {
    NavBar,
    Page,
  },
  setup() {
    return {
      navData,
      cityData,
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-wrapper {
  height: 500px;
  width: 500px;
  border: 1px solid #000;
  margin: 50px auto;
}
</style>
