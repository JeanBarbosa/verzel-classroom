
/* https://gist.github.com/takien/4077195 */
export function youtubeGetID(url: string) {
  const [, , b] = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (b !== undefined) {
    return b.split(/[^0-9a-z_-]/i)[0];
  } else {
    return;
  }
}

