import channel from './channel.js';
import producer from './producer.js';

function runTakeEffect({ pattern }, next) {
  channel.take(pattern, args => next(null, args));
}

function runCallEffect() {

}

function runPutEffect() {

}

function runForkEffect({ saga }, next) {
  const child = saga();
  producer(child);
  next(null);
}

function runTakeEveryEffect({ pattern, saga }, next) {

}

export default {
  'take': runTakeEffect,
  'call': runCallEffect,
  'put': runPutEffect,
  'fork': runForkEffect,
  'takeEvery': runTakeEveryEffect
}