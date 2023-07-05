import { URLINTERFACE } from "../model/URLInterface";
export const reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    case "UPDATE_DATA":
      let findData: URLINTERFACE = state.find(
        (res: URLINTERFACE) => res.urlId === action.payload.id
      );
      findData.origUrl = action.payload.url;
      const newUrls = state.filter(
        (res: URLINTERFACE) => res.urlId != action.payload.id
      );
      return [...newUrls, findData];
    case "REMOVE_DATA":
      const newArray = state.filter(
        (res: URLINTERFACE) => res.urlId != action.id
      );
      return [...newArray];
    case "SET_STATE":
      console.log(action);
      return [...action.payload];
    default:
      return state;
  }
};
