let event = 0;

export default function ownThrottle(fn, time) {
  event += 1;
  if (event > 1) {
    return;
  }

  setTimeout(() => {
    fn();
    event = 0;
  }, time);
}
