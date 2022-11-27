<template>
  <div>
    <Header></Header>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
    />
    <section><Swiper></Swiper></section>
    <!-- <Swiper></Swiper> -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/header.vue'
import Swiper from '@/components/home/Swiper.vue'
export default {
  name: 'Home',
  data () {
    return {
      names: 'wife',
      selectedId: 0,
      items: [
        {label: 'Megumi'},
        {label: 'Komi'},
        {label: 'toka'},
        {label: 'kurumi'},
        {label: 'Miku'},
        {label: '七罪'},
        {label: '祈妹'},
        {label: 'saber'}
      ],
      options: {
        activeColor: '#f00',
        reBoundExponent: 100,
        reBoundingDuration: 560
      }
    }
  },
  components: {
    Tabbar,
    Header,
    Swiper
  }
}
</script>

<style lang="less" scoped>
.ly-tab {
  position: fixed;
  top:1.7143rem;
  left: 0;
  width: 100%;
  height: 1.4286rem;
}
</style>
