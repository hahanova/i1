<template>
  <button
    @click="handleClick"
    data-target="#addDishModal"
  >+ dish</button>
</template>

<script>
// import { db } from '@/db'

export default {
  name: 'AddDish',
  props: ['dishes'],
  data () {
    return {
      isHidden: true,
    }
  },

  methods: {
    handleClick ({target: element}) { // <-- новый метод
      console.log(1)
      // let element = this.$refs.modal.$el
      console.log(element)
      document.getElementById(element.dataset.target).removeClass('hidden')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  button {
    position: fixed;
    right: 0;
    margin: 20px;
    padding: 10px;
    font-size: 16px;
    border: solid 1px black;
  }
</style>
