<template>
  <div id="app">
    <AddDish/>
    <router-view/>
    <AddDishModal/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import AddDish from '@/components/AddDish'
import AddDishModal from '@/components/AddDishModal'

Vue.use(VueMaterial)

export default {
  name: 'App',
  components: {
    AddDish,
    AddDishModal,
  },
}
</script>

<style lang="scss">
@import './style/common';
</style>
