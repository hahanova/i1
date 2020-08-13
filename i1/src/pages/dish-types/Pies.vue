<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="pies" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Pies',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      pies: [],
      type: 'pies',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.pies = dishes.pies
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
