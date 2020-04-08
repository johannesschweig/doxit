<template>
  <div>
    <div class='instruction'>Wähle eine Karte aus</div>
    <div>
      <Card
        v-for='(card, index) in cards'
        :class='{ "selected": selected === index }'
        :key='card'
        :card='card'
        @click.native='select(index)'>
        {{ selected === index }}
        </Card>
    </div>
    <button
      :disabled='selected === -1'>
      Auswählen
    </button>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  data() {
    return {
      selected: -1,
      cards: [ '095', '004', '027', '099', '071', '107' ]
      //Math.floor(Math.random() * Math.floor(107) + 1).toString().padStart(3, "0")
    }
  },
  methods: {
    select(index) {
      this.selected = index
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  background-color: #ccc;
  margin: 0 10px;
}

.instruction {
  font-size: 18px;
  margin: 32px 0;
}
</style>