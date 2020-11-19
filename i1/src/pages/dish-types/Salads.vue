<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="salads" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Salads',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      salads: [],
      type: 'salads',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.salads = dishes.salads
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
