import runEffectMap from './runEffect';

export default function(iterator) {
  
  next();

  function next(err, pre) {
    let temp;
    err && (temp = iterator.throw(err));
    !err && (temp = iterator.next(pre));
    
    if(temp.done)  return;

    /* 假设只会yield三种类型 */
    /*
      1. promise
      2. effect
      3. 不是1和2
    */
    const value = temp.value;
    if(isPromise(value)) {
      value
        .then(success => next(null, success))
        .catch(error => next(error))
    } else if(isEffect(value)) {
      runEffectWithNext(value, next);
    } else {
      next(null, value);
    }
  }
}

function runEffectWithNext({type, ...props}, next) {
  runEffectMap[type](props, next);
}