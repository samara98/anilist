function anotherExampleMiddleware(storeAPI) {
  console.log('Store API', storeAPI);
  return (next) => {
    console.log('Next', next);
    return (action) => {
      // Do something in here, when each action is dispatched
      console.log('Action', action);
      return next(action);
    };
  };
}

export default anotherExampleMiddleware;
