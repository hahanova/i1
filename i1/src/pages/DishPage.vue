
<template>
  <NotFound v-if="typeof dish === 'undefined'"></NotFound>
  <main v-else>
    <section class="dish__section">
      <div class="dish__img-wrapper">
        <img :src="src" :alt="name" />
      </div>
      <div class="dish__info">
        <h1 class="dish__heading dish__heading-main">{{ name }}</h1>
        <p>время приготовления: {{ time }}</p>
        <p>сложность: {{ difficulty }}</p>
      </div>
    </section>
    <section class="dish__section">
      <div class="dish__ingredients">
        <h2 class="dish__heading">Ингредиенты:</h2>
        <ul class="dish__ingredients-list">
          <li v-for="(ingredient, idx) in ingredients" :key="idx">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="dish__description">
        <h2 class="dish__heading">Описание:</h2>
        <p>{{ description }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { db } from '@/db'
import NotFound from '@/components/NotFound'

export default {
  name: 'Dish',
  components: {
    NotFound,
  },
  data () {
    return {
      dish: {},
      ingredients: [],
      name: '',
      time: '',
      difficulty: '',
      description: '',
      src: '',
    }
  },
  mounted () {
    db.get('dishes/')
      .then(dishes => {
        const dishType = location.hash.match(/\w+/)[0]
        const id = location.hash.match(/\w+$/)[0]
        const dishesList = dishes[dishType]

        this.dish = dishesList[id]
        console.log('this.dish', this.dish)
        if (!this.dish) return

        const {
          name,
          time,
          src,
          ingredients,
          difficulty,
          description,
        } = this.dish

        this.ingredients = ingredients.split(',')
        this.src = src || '@/assets/dish-img/befstroganof.jpg'
        this.name = name
        this.time = time
        this.difficulty = difficulty
        this.description = description
      })
      .catch(err => {
        throw err
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.not-found {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}

.dish__section {
  display: flex;
}

.dish {
  &__img-wrapper,
  &__info,
  &__ingredients,
  &__description {
    width: 50%;
  }

  &__img-wrapper {
    img {
      display: block;
      margin: auto;
      height: auto;
      max-height: 100%;
      width: auto;
      max-width: 100%;
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: solid 1px black;
  }

  &__heading {
    text-transform: uppercase;
    margin-bottom: 30px;

    &-main {
      border: solid 1px black;
      padding: 15px;
    }
  }

  &__ingredients,
  &__description {
    padding: 60px;

    &-list {
      list-style: none;
    }
  }
}
</style>
