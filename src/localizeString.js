/**
 * Helper function for pseudo localization
 *
 * https://github.com/tryggvigy/pseudo-localization/blob/master/index.js
 */

// characters map
const map = {
  a: 'àáâãäåāăąǻȁȃ',
  A: 'ÀÁÂÃÄÅĀĂĄǺȀȂ',
  b: 'ƀƂƃƄƅɓ',
  B: 'ßƁɃʙβ',
  c: 'çćĉċč',
  C: 'ÇĆĈĊČ',
  d: 'ďđðδ',
  D: 'ĎĐƉƊ',
  e: 'èēĕėęěȅȇ',
  E: 'ĒĔĖĘĚȄȆÉ',
  f: 'ƒ',
  F: 'Ƒ',
  g: 'ĝğġģϱ',
  G: 'ĜĞĠĢ',
  h: 'ĥħλ',
  H: 'ĤĦ',
  I: 'ĨĪĬĮİÍ',
  i: 'ĩīĭįıï',
  J: 'ĵ',
  j: 'Ĵ',
  K: 'ĶƘϏ',
  k: 'ķĸƙ',
  l: 'ĺļľŀłℓ',
  L: 'ĹĻĽĿŁ£',
  m: '₥',
  N: 'ŃŅŇŊƝ',
  n: 'ńņňŉŋƞกี้ñ',
  o: 'ōŏőơô',
  O: 'ŌŎŐƠÓ',
  P: 'Ƥ',
  p: 'ƥƿþ',
  Q: 'ǪǬ',
  q: 'ǫǭɋ',
  r: 'ŕŗř',
  R: 'ŔŖŘƦ',
  S: 'ŚŜŞŠ§',
  s: 'śŝşšȿƨ',
  T: 'ŢŤŦ',
  t: 'ţťŧƭ†',
  v: 'ѷƲ',
  U: 'ŨŪŬŮŰŲÛ',
  u: 'ũūŭůűųม้ú',
  w: 'ŵผึ้',
  W: 'Ŵ',
  Y: 'ŶŸƳȲɎ¥ÝⓎ',
  y: 'ŷƴȳɏ',
  Z: 'ŹŻŽƵ',
  z: 'źżžƶ',
};

const explosionSymbols = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

function getExplosionSymbol(index) {
  if (explosionSymbols[index]) {
    return explosionSymbols[index];
  }
  return explosionSymbols[explosionSymbols.length - 1];
}

function localizeString(string) {
  let localizedString = '';
  for (let character of string) {
    if (map[character]) {
      localizedString = `${localizedString}${
        map[character][Math.floor(Math.random() * map[character].length)]
      }`;
    } else {
      localizedString = `${localizedString}${character}`;
    }
  }
  return localizedString;
}

function psuedoLocalizeString(string) {
  if (!string) {
    return string;
  }
  let pseudoLocalizedText = localizeString(string);
  const explodeRatio = 1.4;
  // Trim strings to prevent whitespace from increasing the explosion amount
  const explodedTextLength = Math.ceil(string.trim().length * explodeRatio);
  let i = 0;
  while (pseudoLocalizedText.trim().length < explodedTextLength) {
    pseudoLocalizedText = `${pseudoLocalizedText} ${localizeString(
      getExplosionSymbol(i++)
    )}`;
  }
  return `[${pseudoLocalizedText}]`;
}

export default psuedoLocalizeString;
