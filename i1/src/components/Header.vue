<template>
  <header class="header">
    <button
      class="header-button"
      type="button"
      @click="$router.push(getPreviousRoute())"
    >🔙</button>
    <ul class="header-menu__list">
      <li v-for="(item, index) in menu" v-bind:key="index" class="header-menu__option">
        <router-link :to="item.href" class="header-menu__link" :title="item.name">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menu: [
        { name: 'Первые блюда', href: '/maincourses' },
        { name: 'Вторые блюда', href: '/secondcourses' },
        { name: 'Салаты', href: '/salads' },
        { name: 'Пироги', href: '/pies' },
        { name: 'Десерты', href: '/desserts' },
        { name: 'Напитки', href: '/drinks' },
        { name: 'Соусы', href: '/sauces' },
      ],
    }
  },
  methods: {
    hasHistory () { return window.history.length > 2 },
    getPreviousRoute () {
      const { pathname } = window.location
      const previousRoute = this.menu.find(menu => pathname.includes(menu.href))

      if (previousRoute && previousRoute.href !== pathname) {
        return previousRoute.href
      }

      return '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.header-button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-bottom: solid 1px black;
  overflow: hidden;
  padding: 25px;

  &-menu__list {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &-menu__option {
    list-style-type: none;
    margin-left: 20px;
  }

  &-menu__link {
    &:hover,
    &:active {
      color: #000;
    }

    color: #000;
  }
}

</style>
