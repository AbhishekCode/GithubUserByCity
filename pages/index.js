import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getUsersByLocationAction } from "../redux/actions/userAction";
import LocationInput from "../components/LocationInput";
import UserList from "../components/UserList";

const App = props => {
  let users = useSelector(state => {
    return state.user.userList;
  });

  let apiError = useSelector(state => {
    return state.user.apiError;
  });
  return (
    <Container>
      <LocationInput search={getUsersByLocationAction} />
      {apiError && <div>
          <h2>{apiError.message}</h2>
          <a href={apiError.documentation_url} target="_blank" >{apiError.documentation_url}</a>
      </div>}
      <UserList users={users} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
