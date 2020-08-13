<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="maincourses" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'MainCourses',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      maincourses: [],
      type: 'maincourses',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.maincourses = dishes.maincourses
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
