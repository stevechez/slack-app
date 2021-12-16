import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <div>
      <AppContainer>
        <h1>Login</h1>
      </AppContainer>
      
    </div>
  )
}

const AppContainer = styled.div`
  border: 3px solid red;
  flex: 0.3;
  width: 1000px;
  padding-top: 200px;
  padding-left: 200px;
`

export default Login
