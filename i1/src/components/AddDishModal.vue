<template>
  <section class="modal hidden" id="addDishModal" ref="modal">
    <div class="modal__bg"></div>
    <div class="modal__content">
      <form class="modal__form">
        <select class="modal__selection">
          <option>первые блюда</option>
          <option>вторые блюда</option>
          <option>завтраки</option>
          <option>пироги</option>
          <option>десерты</option>
          <option>соусы</option>
          <option>напитки</option>
        </select>

        <input type="text" name="name">
        <input type="text" name="src">
        <input type="text" name="ingredients">
        <input type="text" name="desciption">
      </form>
    </div>
  </section>
</template>

<script>
// import { db } from '@/db'

export default {
  name: 'AddDishModal',
  data () {
    return {}
  },
  methods: {
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

.modal, .modal__bg {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;

  &__bg {
    background: #000;
    opacity: .7;
  }

  &__content{
    position: absolute;
    background: white;
    height: 300px;
    width: 500px;
    margin: 0 auto;
    z-index: 5;
  }

  &__form {
        display: flex;
    flex-direction: column;
  }
}
</style>
