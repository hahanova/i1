<template>
  <section class="home-menu">
    <ul class="home-menu__list">
      <li v-for="(item, index) in menu" v-bind:key="index" class="home-menu__option">
        <router-link :to="item.href" class="home-menu__link" :title="item.name">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menu: [
        { name: 'Первые блюда', href: '/main_courses' },
        { name: 'Вторые блюда', href: '/second_courses' },
        { name: 'Пироги', href: '/pies' },
        { name: 'Десерты', href: '/desserts' },
        { name: 'Соусы', href: '/sauses' },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./home";
</style>
