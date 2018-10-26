import channel from './channel.js';
import producer from './producer.js';

function createSagaMiddleware() {
  let _store = null;
  const sagaMiddleware = store => {
    _store = store;
    return next => action => {
      next(action);
      
      const { type, ...payload } = action;
      channel.put(type, payload);
    }
  } 

  sagaMiddleware.run = saga => {
    const iterator = saga();
    producer.call(_store, iterator);
  }

  return sagaMiddleware;
} 

export default createSagaMiddleware;