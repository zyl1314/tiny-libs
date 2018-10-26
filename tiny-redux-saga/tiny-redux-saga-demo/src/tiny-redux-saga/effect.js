export function take(pattern) {
  return {
    isEffect: true,
    type: 'take',
    pattern: pattern
  }
}

export function call(fn, ...args) {
  return {
    isEffect: true,
    type: 'call',
    fn,
    args
  }
}

export function put(action) {
  return {
    isEffect: true,
    type: 'put',
    action
  }
}

export function fork(saga) {
  return {
    isEffect: true,
    type: 'fork',
    saga
  }
}

export function takeEvery(pattern, saga) {
  return {
    isEffect: true,
    type: 'takeEvery',
    pattern,
    saga
  }
}
