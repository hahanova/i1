<template>
  <PLP :dishes="drinks" :type="type">></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'Drinks',
  components: {
    PLP,
  },
  data () {
    return {
      drinks: [],
      type: 'drinks',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.drinks = dishes.drinks
    }).catch(err => { throw err })
  },
}
</script>
