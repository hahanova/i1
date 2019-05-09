<template>
  <PLP :dishes="maincourses" :type="type"></PLP>
</template>

<script>
import { db } from '@/db'
import PLP from '@/components/plp/PLP'

export default {
  name: 'MainCourses',
  components: {
    PLP,
  },
  data () {
    return {
      maincourses: [],
      type: 'maincourses',
    }
  },
  mounted () {
    db.get('dishes/').then((dishes) => {
      console.log(dishes, this)
      this.maincourses = dishes.maincourses
    }).catch(err => { throw err })
  },
  methods: {
    // addLocation (name, image) { // <-- новый метод
    //   db.collection('dishes').add({ name, image })
    // },
  },
}
</script>
