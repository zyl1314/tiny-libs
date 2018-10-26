function channel() {
  /*
    task = {
      pattern,
      cb
    }
  */
  let _task = null;

  function take(task) {
    _task = task;
  }

  function put(pattern, args) {
    if(!_task) return;
    if(pattern == _task.pattern) _task.cb.call(null, args);
  }

  return {
    take,
    put
  }
}

export default channel();