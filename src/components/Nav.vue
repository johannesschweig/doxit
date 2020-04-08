<template>
  <div>  
    <router-link
      v-for='route in routes'
      :to='route.path'
      :key='route.name'>
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
import { routes } from '../router/index'

export default {
  data() {
    return {
      routes: routes
    }
  }  
}
</script>

<style scoped>
a {
  margin: 0 8px;
}
</style>