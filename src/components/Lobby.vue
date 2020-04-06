<template>
  <div class="hello">
    <h1>Doxit</h1>
    <div class='players'>
      <Avatar
        v-for='(client, index) in getClientsWithGhosts'
        :name='client === "" ? "" : "Player " + (index + 1)'
        :active='id === client'
        :key='client'>
        Player {{ index + 1 }}
      </Avatar>
    </div>
    <div>
      <p>Wait for 4 players to join</p>
      <button @click='startGame'>Start Game</button>
    </div>
    <div
      id='canvas'
      v-if='gameStatus !== "Waiting"'>
      xxo
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Lobby',
  components: {
    'Avatar': Avatar
  },
  props: {
    msg: String
  },
  data() {
    return {
      id: '2',
      // clients: [],
      clients: ['1', '2'],
      logs: [],
      gameStatus: 'Waiting',
      status: "disconnected",
      // ws: 'wss://doxit-websocket.herokuapp.com'
      ws: 'ws://localhost:1234'
    }
  },
  computed: {
    getClientsWithGhosts() {
      return this.clients.concat(Array(4 - this.clients.length).fill(''))
    }
  },
  methods: {
    connect() {
      this.socket = new WebSocket(this.ws)
      this.socket.onopen = () => {
        this.status = "connected"
        this.logs.push({ event: "Connected to", data: this.ws})
        console.log('Connected to', this.ws)
        

        this.socket.onmessage = ({data}) => {
          this.logs.push({ event: "Recieved message", data })
          console.log('Recieved message', data)
          let json = JSON.parse(data)
          if (Object.prototype.hasOwnProperty.call(json, 'ID')) {
            this.id = json['ID']
          } else if (Object.prototype.hasOwnProperty.call(json, 'clients')) {
            this.clients = json['clients']
          } else if (Object.prototype.hasOwnProperty.call(json, 'start-game')) {
            this.gameStatus = 'Start'
          }
        }
      }
    },
    disconnect() {
      this.socket.close()
      this.status = "disconnected"
      this.logs = []
    },
    sendMessage(msg) {
      this.socket.send(msg)
      this.logs.push({ event: "Sent message", data: msg })
      console.log('Sent message', msg)
    },
    startGame() {
      this.gameStatus = 'Start'
      this.sendMessage(JSON.stringify({ 'start-game': true }))
    }
  },
  created() {
    // this.connect()
  }
}
</script>

<style scoped>
.players > * {
  margin: 0 12px;
}
</style>