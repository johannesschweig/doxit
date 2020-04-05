<template>
  <div class="hello">
    <h1>Doxit</h1>
<button @click="disconnect" v-if="status === 'connected'">Disconnect</button>
  <button @click="connect" v-if="status === 'disconnected'">Connect</button> {{ status }}
  <br /><br />
  <div v-if="status === 'connected'">
    <form @submit.prevent="sendMessage" action="#">
      <input v-model="message"><button type="submit">Send Message</button>
    </form>
    <ul id="logs">
      <li v-for="log in logs" class="log">
        {{ log.event }}: {{ log.data }}
      </li>
    </ul>
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
      message: "",
      logs: [],
      status: "disconnected",
      ws: 'wss://doxit-websocket.herokuapp.com'
    }
  },
  methods: {
    connect() {
      this.socket = new WebSocket(this.ws);
      this.socket.onopen = () => {
        this.status = "connected";
        this.logs.push({ event: "Connected to", data: this.ws})
        

        this.socket.onmessage = ({data}) => {
          this.logs.push({ event: "Recieved message", data });
        };
      };
    },
    disconnect() {
      this.socket.close();
      this.status = "disconnected";
      this.logs = [];
    },
    sendMessage(e) {
      this.socket.send(this.message);
      this.logs.push({ event: "Sent message", data: this.message });
      this.message = "";
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>