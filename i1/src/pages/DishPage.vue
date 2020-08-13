
<template>
  <NotFound v-if="typeof dish === 'undefined'"></NotFound>
  <main v-else>
    <title>{{ name }}</title>
    <Loader v-if="isLoading"></Loader>
    <section v-else class="dish__section upper-block">
      <div class="dish__img-wrapper">
        <img :src="src" :alt="name" />
      </div>
      <div class="dish__info">
        <h1 class="dish__heading dish__heading-main">{{ name }}</h1>
        <p>время приготовления: {{ time }}</p>
        <p>сложность: {{ getDifficulty(difficulty) }}</p>
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
import Loader from '@/components/Loader'

export default {
  name: 'Dish',
  components: {
    NotFound,
    Loader,
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
      difficultyMap: {
        1: 'изи-бризи',
        2: 'нормуль',
        3: 'сложна',
      },
      isLoading: true,
    }
  },
  methods: {
    getDifficulty (index) { return this.difficultyMap[index] },
  },
  mounted () {
    db.get('dishes/')
      .then(dishes => {
        const dishType = location.pathname.match(/\w+/)[0]
        const id = location.pathname.match(/\w+$/)[0]
        const dishesList = dishes[dishType]

        this.dish = dishesList[id]

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
        this.isLoading = false
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

.upper-block {
  border-bottom: solid 1px black;
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

@media screen and (max-width: 768px) {
  .dish {
    &__img-wrapper,
    &__info,
    &__ingredients,
    &__description {
      width: 100%;
    }

    &__ingredients {
      padding-bottom: 0;
    }

    &__section{
      flex-direction: column;
    }

    &__info {
      margin: 30px 0;
    }
  }

  .upper-block {
    border: none;
    flex-direction: column-reverse;
  }
}
</style>
