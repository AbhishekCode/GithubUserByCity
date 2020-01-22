import { getUserByLocationApi } from "../../api/userapi"

export const actionTypes = {
  GET_USER_BY_LOCATION: 'GET_USER_BY_LOCATION',
}
// ACTIONS

export const getUsersByLocation = (location) => dispatch=> {
  getUserByLocationApi(location).then(response=>{
     response.json().then(data=> {
       console.log(data)
     })
   })
}
