<template>
  <div>
    <h1>Spielbrett</h1>
    <div class='players'>
      <Avatar
        v-for='(client, index) in getClientsWithoutPlayer'
        :name='"Spieler " + client'
        :narrator='client === narrator'
        class='small'
        :key='index' />
    </div>
    <div id='status'>Spieler 1 wählt eine Karte aus</div>
    <div id='hand'>
      <Avatar
        :name='"Spieler " + id'
        class='small'
        :key='id' />
      <Hand />
    </div>
  </div>   
</template>

<script>
import Avatar from './Avatar'
import Hand from './Hand'
import { getElLastInArr } from '../utils'

export default {
  components: {
    Avatar,
    Hand
  },
  data() {
    return {
      id: '2',
      clients: ['1', '2', '3'],
      narrator: '1'
    }
  },
  computed: {
    getClientsWithoutPlayer() {
      let sortedClients = getElLastInArr(this.clients, this.id)
      return sortedClients.filter(client => client !== this.id)
    }
  }
}
</script>

<style scoped>
.players > * {
  margin: 0 12px;
}

#hand {
  position: absolute;
  bottom: 0px;
  margin: 0 auto;
  width: 100%;
}

#status {
  margin-top: 30vh;
}
</style>