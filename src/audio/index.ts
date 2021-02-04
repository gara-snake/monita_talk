export const nyu01 = new Audio(require("@/assets/Sounds/nyu01.mp3"));
export const boo = new Audio(require("@/assets/Sounds/boo.mp3"));
export const hyuun = new Audio(require("@/assets/Sounds/hyuun.mp3"));
export const rin = new Audio(require("@/assets/Sounds/rin.mp3"));
export const say = new Audio(require("@/assets/Sounds/say.mp3"));

export function PlaySound(audio: HTMLAudioElement) {
  audio.currentTime = 0;
  audio.play();
}

export function Say() {
	PlaySound(say);
}
