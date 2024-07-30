export default (clubs = [], action) => {
  switch (action.type) {
    case "GET_ALL_CLUBS":
      //on sait jamais i need it
      //console.log(action.payload)
      return action.payload;
    case "GET_CLUB":
      // console.log(action.payload)
      return action.payload;
    default:
      return clubs;
  }
};
