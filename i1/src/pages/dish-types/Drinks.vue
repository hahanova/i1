<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="drinks" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Drinks',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      drinks: [],
      type: 'drinks',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.drinks = dishes.drinks
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
