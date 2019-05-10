<template>
  <PLP :dishes="pies" :type="type">></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'Pies',
  components: {
    PLP,
  },
  data () {
    return {
      pies: [],
      type: 'pies',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.pies = dishes.pies
    }).catch(err => { throw err })
  },
}
</script>
