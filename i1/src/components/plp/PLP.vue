<template>
  <section class="plp">
    <article
      class="plp__item"
      v-for="(dishes, idx) in dishes"
      :key="idx"
    >
      <div class="plp__picture">
        <img :src="dishes.src" :alt="dishes.name">
      </div>
      <div class="plp__name">{{ dishes.name }}</div>
    </article>
  </section>
</template>

<script>
import { db } from '@/db'

export default {
  name: 'PLP',
  props: ['dishes'],
  data () {
    return {
      maincourses: [],
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.maincourses = dishes.maincourses
    }).catch(err => { throw err })
  },
  methods: {
    // addLocation (name, image) { // <-- новый метод
    //   db.collection('dishes').add({ name, image })
    // },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./plp";
</style>
