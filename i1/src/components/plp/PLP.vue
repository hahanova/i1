<template>
  <section class="plp">
    <article
      class="plp__item"
      v-for="(dish, idx) in dishes"
      :key="idx"
    >
      <router-link
        :to="`/${type}/${idx}`"
        class="home-menu__link"
        :title="dish.name"
      >
        <div class="plp__picture">
          <img :src="dish.src" :alt="dish.name" />
        </div>
        <div class="plp__name">{{ dish.name }}</div>
      </router-link>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PLP',
  props: ['dishes', 'type'],
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./plp";
</style>
