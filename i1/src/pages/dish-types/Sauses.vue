<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="sauses" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Sauses',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      sauses: [],
      type: 'sauses',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.sauses = dishes.sauses
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
