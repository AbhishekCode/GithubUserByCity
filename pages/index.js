import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getUsersByLocation } from "../redux/actions/userAction";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const App = props => {
  let reduxState = useSelector(state => state);
  let dispatch = useDispatch()

  dispatch(getUsersByLocation("mumbai"))
  console.log({reduxState})
  return <Title>My page</Title>;
};



export default App