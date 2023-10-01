import React, { useEffect, useState, useRef } from 'react';

import { Component } from '../types';

export const Signup: Component = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = useRef<Component | null>(null);

  useEffect( () => {
    (async() => {
      setLoading(true);

      const request = await fetch('/api/v1/form/signup/');
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
      <form>
        {/* <token.current/> */}
        <h1>signup</h1>
      </form>
    );
  }

  return <h2>erro ao adquirir o token</h2>;
};
