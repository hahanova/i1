<template>
  <div id="app">
    <AddDish/>
    <router-view/>
    <AddDishModal/>
  </div>
</template>

<script>
import AddDish from '@/components/AddDish'
import AddDishModal from '@/components/AddDishModal'

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
