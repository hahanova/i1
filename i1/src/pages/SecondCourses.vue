<template>
  <PLP :dishes="secondcourses"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'SecondCourses',
  components: {
    PLP,
  },
  data () {
    return {
      secondcourses: [],
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.secondcourses = dishes.secondcourses
    }).catch(err => { throw err })
  },
}
</script>
