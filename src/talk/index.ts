const wordSet: { word: string; answer: string }[] = [
  {
    word: "好きな食べ物",
    answer: "牛丼！"
  }
];

export function Tell(msg: string): string {
  for (const item of wordSet) {
    if (msg.includes(item.word)) {
      return item.answer;
    }
  }

  return "すみません。\n分かりませんでした😭";
}
