<template>
  <section class="home-menu">
      <ul class="home-menu__list">
        <li class="home-menu__option"><a href="./mainCourses.html" class="home-menu__link" title="Первые блюда">Первые блюда</a></li>
        <li class="home-menu__option"><a href="#" class="home-menu__link" title="Вторые блюда">Вторые блюда</a></li>
        <li class="home-menu__option"><a href="#" class="home-menu__link" title="Пироги">Пироги</a></li>
        <li class="home-menu__option"><a href="#" class="home-menu__link" title="Десерты">Десерты</a></li>
        <li class="home-menu__option"><a href="#" class="home-menu__link" title="Соусы">Соусы</a></li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'H',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './home';
</style>
