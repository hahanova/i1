<template>
  <PLP :dishes="sauses" :type="type">></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'Sauses',
  components: {
    PLP,
  },
  data () {
    return {
      sauses: [],
      type: 'sauses',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.sauses = dishes.sauses
    }).catch(err => { throw err })
  },
}
</script>
