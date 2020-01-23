import React from "react";
import styled from "styled-components";

const UserList = (props) => {
    return (
       <React.Fragment>
           {props.users && props.users.map(user=> {
             return <UserView key={user.id} {...user}/>
           })}
       </React.Fragment>
    )
}


export default UserList


const UserView = (props) => {
    return (
        <UserViewContainer>
            <img src={props.avatar_url} height={50} width={50}></img>
            <UserInfo>
                <h3
                  css={`
                    display: flex;
                    flex-direction: row;
                    font-size: 24px;
                    color: black;
                  `}
                 >
                    <Link target="_blank" href={props.html_url}>{props.login}</Link>
                    <div css={`margin-left: 10px;`}>{props.name}</div>
                </h3>
                
                <p css={`
                    font-size: 16px;
                    color: black;
                    margin-top: 5px;
                    margin-bottom: 5px;
                `}>{props.bio}</p>

                <div>{props.location}</div>
                <div>{props.email}</div>
            </UserInfo>
        </UserViewContainer>
    )
}

const UserViewContainer = styled.div`
  display: flex;
  flex:1,
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid grey;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`


const Link = styled.a`

`