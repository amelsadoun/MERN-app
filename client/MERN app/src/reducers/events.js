export default (events = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      // console.log(action.payload)
      return action.payload;
    case 'CREATE':
      return [...events, action.payload];
    case 'FETCH':
      // console.log(action.payload)
      return action.payload;
    default:
      return events;
  }
};
