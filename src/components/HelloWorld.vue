<template>
  <div class="hello">
    <h1>Doxit</h1>
    <h2>Players in queue</h2>
    <p>Wait for 4 players to join</p>
    <div
      v-for='(client, index) in clients'
      :class='["user", { "active": id === client }]'
      :key='client'>
      Player {{ index + 1 }}
    </div>
    <button @click='startGame'>Start Game</button>
    <div
      id='canvas'
      v-if='gameStatus !== "Waiting"'>
      xxo
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      id: null,
      clients: [],
      logs: [],
      gameStatus: 'Waiting',
      status: "disconnected",
      // ws: 'wss://doxit-websocket.herokuapp.com'
      ws: 'ws://localhost:1234'
    }
  },
  methods: {
    connect() {
      this.socket = new WebSocket(this.ws);
      this.socket.onopen = () => {
        this.status = "connected";
        this.logs.push({ event: "Connected to", data: this.ws})
        console.log('Connected to', this.ws)
        

        this.socket.onmessage = ({data}) => {
          this.logs.push({ event: "Recieved message", data });
          console.log('Recieved message', data)
          let json = JSON.parse(data)
          if (json.hasOwnProperty('ID')) {
            this.id = json['ID']
          } else if (json.hasOwnProperty('clients')) {
            this.clients = json['clients']
          } else if (json.hasOwnProperty('start-game')) {
            this.gameStatus = 'Start'
          }
        };
      };
    },
    disconnect() {
      this.socket.close();
      this.status = "disconnected";
      this.logs = [];
    },
    sendMessage(msg) {
      this.socket.send(msg);
      this.logs.push({ event: "Sent message", data: msg });
      console.log('Sent message', msg)
    },
    startGame() {
      this.gameStatus = 'Start'
      this.sendMessage(JSON.stringify({ 'start-game': true }))
    }
  },
  created() {
    this.connect()
  }
}
</script>

<style scoped>
.user {
  background-color: #ccc;
  width: 150px;
  height: 150px;
  display: inline-block;
}

.user.active {
  background-color: blue;
  font-weight: bold;
  color: white;
}
</style>