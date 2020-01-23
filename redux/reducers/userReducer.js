import { actionTypes } from "../actions/userAction";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  userList: []
};

// REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_BY_LOCATION:
      return { ...state, users: action.data, userList: [] };

    case actionTypes.LOAD_USER_SPECIFIC_DATA:
      return { ...state, userList: [...state.userList, action.data] };

    case actionTypes.API_RATE_LIMIT_REACHED:
      return { ...state, apiError: action.data };

    case actionTypes.RESET_ERRORS:
      return { ...state, apiError: null };

    default:
      return state;
  }
};

export default reducer;
