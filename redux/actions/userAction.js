import { getUserByLocationApi, simpleApiRequest } from "../../api/userapi"

export const actionTypes = {
  GET_USER_BY_LOCATION: 'GET_USER_BY_LOCATION',
  LOAD_USER_SPECIFIC_DATA: "LOAD_USER_SPECIFIC_DATA",
  API_RATE_LIMIT_REACHED: "API_RATE_LIMIT_REACHED", 
  RESET_ERRORS : "RESET_ERRORS"
}
// ACTIONS

export const getUsersByLocationAction = (location) => dispatch=> {
  dispatch({type: actionTypes.RESET_ERRORS})
  getUserByLocationApi(location).then(response=>{
     response.json().then(data=> {
       if(data.message && data.message.includes("API rate limit exceeded")) {
         dispatch({type: actionTypes.API_RATE_LIMIT_REACHED, data: data})
       }else {
        dispatch({type: actionTypes.GET_USER_BY_LOCATION, data:data})
        dispatch(loadUserSpecificData(data))
       }
     })
   }).catch(err=>{
    console.log(err)
   })
}

export const loadUserSpecificData = (users) => dispatch => {
  users.items.forEach(user=> {
    simpleApiRequest(user.url).then(response=> {
      response.json().then(data=>{
        if(data.message && data.message.includes("API rate limit exceeded")) {
          dispatch({type: actionTypes.API_RATE_LIMIT_REACHED, data: data})
        }else {
        dispatch({type: actionTypes.LOAD_USER_SPECIFIC_DATA, data: {...user, ...data}})
        }
      })
    }).catch(err=>{
      console.log(err)
     })
  })
}

