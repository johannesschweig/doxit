<template>
    <div
      v-if='name === ""'
      class='user ghost'>
      Freier Platz
    </div>
    <div
      v-else
      :class='["user", { "active": active }]'>
        <div>{{ name }}</div>
        <div v-if='narrator'>(EZ)</div>
        <div v-if='points'>Pt: {{ points }}</div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
          type: String,
          required: true
        },
        points: Number,
        narrator: Boolean,
        active: Boolean
    }
}
</script>

<style scoped>
.user {
  width: 150px;
  height: 150px;
  display: inline-block;
}

.user.small {
  width: 100px;
  height: 50px;
}

.user.active {
  background-color: blue;
  font-weight: bold;
  color: white;
}

.user:not(.ghost):not(.active) {
  background-color: #ccc;
}

.user.ghost {
  background-color: white;
  border: 1px dashed #ccc;
  color: #808080;
}
</style>