<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="desserts" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'Desserts',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      desserts: [],
      type: 'desserts',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.desserts = dishes.desserts
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
