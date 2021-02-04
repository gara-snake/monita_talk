<template>
  <div>
    <div class="home">
      <div class="frame_txt">
        <p class="txt">
          {{ viewText }}
        </p>
      </div>
      <img class="frame_img" src="@/assets/MonitaFrame.png" alt="" />
      <img
        class="frame_img"
        v-show="viewText == ''"
        v-bind:src="monitaFaceSrc"
        alt=""
      />
    </div>
    <div class="buttons">
      <input
        type="button"
        class="btn btnColorGrn"
        value="A"
        @click="clickBtn('A')"
      />
      <input
        type="button"
        class="btn btnColorGrn"
        value="B"
        @click="clickBtn('B')"
      />
      <input
        type="button"
        class="btn btnColorGrn"
        value="C"
        @click="clickBtn('C')"
      />
      <input
        type="button"
        class="btn btnColorGrn"
        value="戻す"
        @click="clickBtn('Clear')"
      />
    </div>
    <div class="talk">
      <input type="text" class="textBox" v-model="talkText" />
      <button class="btn btnColorBle" @click="onTalk">
        <i class="far fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as sounds from "@/audio";
import * as talk from "@/talk";

interface Data {
  viewText: string;
  monitaFaceSrc: string;
  talkText: string;
}

export default Vue.extend({
  name: "Home",
  data: function(): Data {
    return {
      viewText: "",
      monitaFaceSrc: require("@/assets/MonitaFace1.png"),
      talkText: ""
    };
  },
  components: {},
  methods: {
    clickBtn(key: string) {
      switch (key) {
        case "A":
          this.say("おはよう！");
          break;
        case "B":
          sounds.PlaySound(sounds.nyu01);
          break;
        case "C":
          break;
        case "D":
          break;
        case "Clear":
          this.cleanMessage();
          break;

        default:
          break;
      }
    },
    cleanMessage() {
      this.viewText = "";
    },
    say(msg: string) {
      this.viewText = msg;
      sounds.Say();
    },
    onTalk() {
      const ret = talk.Tell(this.talkText);
      this.say(ret);
    }
  }
});
</script>

<style>
.home {
  /* border: solid #2c3e50 1px; */
  width: 1000px;
  height: 680px;
  margin: auto;
  position: relative;
}
.txt {
  /* border: solid #ff3e50 1px; */
  margin: auto;
  width: 90%;
  font-size: xx-large;
  font-weight: bold;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  white-space: pre-wrap;
  word-wrap: break-word;
}
.textBox {
  display: inline-block;
  font-size: 20px;
  padding: 5px 5px;
  border-radius: 4px;
  border-bottom: 4px solid #818579;
  margin: 0;
}
.btn {
  display: inline-block;
  max-width: 180px;
  text-align: left;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 24px;
  border-radius: 4px;

  margin: 0 10px;
}

.btnColorGrn {
  background-color: #6ee670;
  border-bottom: 4px solid #59c25b;
}

.btnColorBle {
  background-color: #7ce2e6;
  border-bottom: 4px solid #69c3c7;
}

.btn:active {
  transform: translateY(4px);
  border-bottom: none;
}
.buttons {
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;

  border: solid #2c3e50 3px;
  width: 750px;
  padding: 0.5em 0;
  border-radius: 10px;
}
.talk {
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;

  border: solid #2c3e50 3px;
  width: 750px;
  padding: 0.5em 0;
  border-radius: 10px;
}
.frame_txt {
  background-color: #e9f5ec;
  width: 400px;
  height: 350px;
  margin: auto;
  top: 120px;
  left: 280px;
  position: absolute;
}
.frame_img {
  position: absolute;
  top: 10px;
  left: 50px;
}
</style>
