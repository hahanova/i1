<template>
  <section v-bind:class="{ hidden: isHidden, modal: true }" id="addDishModal" ref="modal">
    <div class="modal__bg"></div>
    <div class="modal__content">
      <form class="modal__form">
        <button class="modal__btn--close" @click="handleClose">x</button>
        <md-field>
          <label>Название</label>
          <md-input v-model="withLabel"></md-input>
        </md-field>

        <md-field>
          <label>Линка картинки</label>
          <md-input v-model="withLabel"></md-input>
        </md-field>

        <md-field>
          <label>Ингридиенты</label>
          <md-input v-model="withLabel"></md-input>
          <span class="md-helper-text">введите через запятую, плиз</span>
        </md-field>

        <md-field>
          <label>Время приготовление</label>
          <md-input v-model="withLabel" placeholder="1ч"></md-input>
        </md-field>

        <md-field md-inline>
          <label>Сложность</label>
          <md-input v-model="withLabel"></md-input>
        </md-field>

        <md-field>
          <label>Описание</label>
          <md-textarea v-model="textarea"></md-textarea>
        </md-field>

        <button type="submit" class="modal__btn" @click="saveUser" :disabled="sending">добавить блюдо</button>
      </form>
    </div>
  </section>
</template>

<script>
// import { db } from '@/db'

export default {
  name: 'AddDishModal',
  data () {
    return {
      isHidden: true,
      dishes: null,
      withLabel: null,
      textarea: null,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null,
    }
  },
  methods: {
    handleClose ({target: element}) {
      document.getElementById('addDishModal').classList.add('hidden')
    },
    clearForm () {
      this.$v.$reset()
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
    },
    saveUser (event) {
      event.preventDefault()
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }, 1500)
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
    position: relative;
    background: white;
    width: 500px;
    margin: 0 auto;
    padding: 30px;
    z-index: 5;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__btn {
    position: static;

    &--close {
      position: absolute;
      top: 0;
      border: none;
      background: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .modal {
    &__content{
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
}
</style>
