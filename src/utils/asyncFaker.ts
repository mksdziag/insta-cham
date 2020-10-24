function timeout(ms = 850) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function asyncFaker(fn, time, ...args) {
  await timeout(time);
  return fn(...args);
}
