export const urlSafeCharset = [
  '-',
  '.',
  '_',
  '~',
];

for (let i = 0; i < 10; i++) {

  urlSafeCharset.push(i+'');

}

for (let i = 65; i < 91; i++) {

  urlSafeCharset.push(String.fromCharCode(i));

}

for (let i = 97; i < 122; i++) {

  urlSafeCharset.push(String.fromCharCode(i));

}
