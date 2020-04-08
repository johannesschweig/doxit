<template>
  <div class='trim'>
    <img
      class='card'
      draggable='false'
      :src="require(`@/assets/cards/` + card + `.jpg`)" />
  </div>
</template>

<script>
export default {
  props: {
    card: {
        type: String,
        required: true
    }
  }
}
</script>

<style scoped>
.trim {
  display: inline-block;
  margin: 0 10px;
}

.card {
  max-width: 100%;
  cursor: pointer;
}

.selected > .card {
  border: 5px solid blue;
}

.trim.small {
  max-width: 150px;
  max-height: 120px;
  overflow: hidden;
}
</style>