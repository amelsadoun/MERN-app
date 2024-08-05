export default (events = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      // console.log(action.payload)
      return action.payload;
    case 'CREATE':
      return action.payload;
    case 'UPDATE':
      return action.payload;
    case 'DELETE':
      return events;
    case 'FETCH':
      // console.log(action.payload)
      return action.payload;
    default:
      return events;
  }
};
