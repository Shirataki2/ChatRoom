<template>
  <div>
    <v-layout
      column
      justify-center
      align-center
    >
      <h1>Chat Room</h1>

      <v-container>
        <v-form
          style="width: 100%; text-align: center;"
          v-model="createvalid"
        >
          <h2>Create Room</h2>
          <v-row>
            <v-col
              cols="12"
              sm="8"
              offset-sm="2"
            >
              <v-text-field
                label="User Name"
                v-model="username"
                :rules="[v => !!v || 'User Name is required']"
              />
              <v-btn
                :disabled="btn_disabled"
                color="primary"
                class="mb-8"
                @click="createRoom"
              >Create</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-form
          style="width: 100%; text-align: center;"
          v-model="joinvalid"
        >
          <h2>Join Room</h2>
          <v-row>
            <v-col
              cols="12"
              sm="8"
              offset-sm="2"
            >
              <v-text-field
                label="User Name"
                v-model="username"
                :rules="[v => !!v || 'User Name is required']"
              />
              <v-text-field
                label="Room ID"
                v-model="id"
                :rules="[v => !!v || 'Room ID is required']"
              />
              <v-btn
                :disabled="btn_disabled"
                color="primary"
                class="mb-8"
                @click="joinRoom"
              >Join</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      </v-form>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import client from "@/plugins/socket.io";

@Component
export default class Index extends Vue {
  id: string = "";
  username: string = "";
  btn_disabled: boolean = false;
  createvalid: boolean = false;
  joinvalid: boolean = false;

  async createRoom() {
    if (this.username === "") {
      return;
    }
    const url = getRndStr(12);
    this.btn_disabled = true;
    client.emit("join_room", url);
    client.emit("broadcast_join", url);
    localStorage.setItem("chat/name", this.username);
    this.$router.push(`/main/${url}`);
  }

  async joinRoom() {
    if (this.username === "" || this.id === "") {
      return;
    }
  }
}

function getRndStr(len: number) {
  var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var result = "";
  for (var i = 0; i < len; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length));
  }
  return result;
}
</script>
