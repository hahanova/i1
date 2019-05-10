<template>
  <PLP :dishes="desserts" :type="type">></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'Desserts',
  components: {
    PLP,
  },
  data () {
    return {
      desserts: [],
      type: 'desserts',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.desserts = dishes.desserts
    }).catch(err => { throw err })
  },
}
</script>
