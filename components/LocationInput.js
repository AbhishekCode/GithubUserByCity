import React, {useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const LocationInput = props => {
    const [location, setLocation] = useState(null)
    const dispatch = useDispatch()
  return (
    <Container>
      <LocationInputComponent type={"text"} placeholder={"Enter your city"} onChange={(e)=>{setLocation(e.target.value)}}/>
      <SearchButton onClick={()=>dispatch(props.search(location))}> Search   </SearchButton>
    </Container>
  );
};

export default LocationInput;

const Container = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`

const LocationInputComponent = styled.input`
  font-size: 20px;
  color: "black";
  height: 40px;
  width: 400px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const SearchButton = styled.button`
  font-size: 20px;
  color: "black";
  height: 40px;
  width: 100px;
  border: 1px solid black;
  border-left: none;
  padding: 5px;
  box-sizing: content-box;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
