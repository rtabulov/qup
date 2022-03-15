import emojis from '../emojis.json';

const selectedEmojis = [emojis.emojis.People, emojis.emojis.Objects].reduce(
  (acc, curr) => acc.concat(Object.keys(curr)),
  [] as string[],
);

export function getRandomEmoji() {
  const rand = Math.floor(Math.random() * selectedEmojis.length);
  return selectedEmojis[rand];
}
