<template>
  <section class="plp">
    <title>{{ type }}</title>
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
import Loader from '@/components/Loader'

export default {
  name: 'PLP',
  props: ['dishes', 'type'],
  components: {
    Loader,
  },
  data () {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./plp";
[v-cloak] > * { display:none; }
[v-cloak]::before {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  background-image: url('https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif');
}
</style>
