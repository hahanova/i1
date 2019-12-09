<template>
  <PLP :dishes="sauces" :type="type">></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'Sauces',
  components: {
    PLP,
  },
  data () {
    return {
      sauces: [],
      type: 'sauces',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.sauces = dishes.sauces
    }).catch(err => { throw err })
  },
}
</script>
