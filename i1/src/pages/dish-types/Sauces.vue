<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="sauces" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Sauces',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      sauces: [],
      type: 'sauces',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.sauces = dishes.sauces
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
