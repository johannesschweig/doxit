<template>
  <router-link to='/big-cards'>
    <Card
      v-for='card in cards'
      :card='card'
      class='small'
      :key='card' />
  </router-link>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [ '079', '059', '026', '076', '032', '017' ]
    }
  }
}
</script>

