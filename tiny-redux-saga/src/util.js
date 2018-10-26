export const is = {
  isPromise(p) {
    return typeof p.then == 'function' && typeof p.catch == 'function'
  },

  isEffect(effect) {
    return !!effect.isEffect
  }
}