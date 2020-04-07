<template>
  <div>
    <div
      v-for='card in cards'
      class='card'
      :key='card'>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [1, 2, 3, 4]
    }
  }
}
</script>

<style scoped>
.card {
  display: inline-block;
  background-color: #ccc;
  width: 200px;
  height: 100px;
  margin: 0 10px;
}
</style>