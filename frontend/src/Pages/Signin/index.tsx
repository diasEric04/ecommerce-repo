import React ,{ useEffect, useState, useRef } from 'react';

import * as styled from '../styles';
import { Component } from '../types';


export const Signin: Component = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = useRef<Component | null>(null);

  useEffect( () => {
    (async() => {
      setLoading(true);

      const request = await fetch('/api/v1/form/signin/');
      const data = await request.text();
      const Token = () => {
        return React.createElement('div', {
          dangerouslySetInnerHTML: {'__html': data},
          className: 'hiden--token'
        })
      }

      token.current = Token;

      setLoading(false);
    })()

    return () => setLoading(false);
  }, []);

  if (loading) {
    return <p>loading form...</p>;
  }

  if (token.current) {
    return (
      <styled.Form>
        {/* <token.current/> */}
        <styled.Heading>Sign In</styled.Heading>
        <styled.InputsWrapper>

          <styled.InputGroup>
            <styled.Label>Primeiro nome:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='first_name' type='text' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Label>Sobrenome:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='last_name' type='text' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Label>E-Mail:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='email' type='text' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Label>Usuario:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='username' type='text' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Label>Senha:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='password1' type='password' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Label>Repita sua senha:
              <styled.Req> * </styled.Req>
            </styled.Label>
            <styled.Input name='password2' type='password' required />
          </styled.InputGroup>

          <styled.InputGroup>
            <styled.Input type='submit' value='Enviar'/>
          </styled.InputGroup>

        </styled.InputsWrapper>
      </styled.Form>
    );
  }

  return <h2>erro</h2>;
};
