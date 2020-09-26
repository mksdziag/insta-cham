function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function asyncFaker(fn, ...args) {
  await timeout(850);
  return fn(...args);
}
