<template>
  <div>
    <a href='javascript:history.go(-1)'> ❮ </a>
    <Card :card='"040"' />
    <p>Überlege dir eine Aussage</p>
    <input placeholder='schreib etwas'/>
    <button>Bestätigen</button>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  }
    
}
</script>

<style scoped>
input {
  margin-right: 16px;
}
</style>