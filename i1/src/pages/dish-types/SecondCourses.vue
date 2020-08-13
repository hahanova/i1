<template>
  <Loader v-if="isLoading"></Loader>
  <PLP v-else :dishes="secondcourses" :type="type" :isLoading="isLoading"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'
import Loader from '@/components/Loader'

export default {
  name: 'SecondCourses',
  components: {
    PLP,
    Loader,
  },
  data () {
    return {
      secondcourses: [],
      type: 'secondcourses',
      isLoading: true,
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.secondcourses = dishes.secondcourses
      this.isLoading = false
    }).catch(err => { throw err })
  },
}
</script>
