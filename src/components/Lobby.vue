<template>
  <div>
    <h1>Doxit</h1>
    <div class='players'>
      <Avatar
        v-for='(client, index) in getClientsWithGhosts'
        :name='client === "" ? "" : "Spieler " + (index + 1)'
        :active='id === client'
        :key='index'>
      </Avatar>
    </div>
    <div>
      <router-link to='/board'>
        <button
          :disabled='gameStatus === "Waiting"'
          @click='startGame'>
          Starten 
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'Lobby',
  components: {
    Avatar
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
      // gameStatus: 'Ready',
      status: "disconnected",
      // ws: 'wss://doxit-websocket.herokuapp.com'
      ws: 'ws://localhost:1234'
    }
  },
  computed: {
    getClientsWithGhosts() {
      return this.clients.concat(Array(3 - this.clients.length).fill(''))
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
      // this.sendMessage(JSON.stringify({ 'start-game': true }))
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

button {
  margin-top: 32px;
}
</style>