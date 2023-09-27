import { Component } from '../../types/components';
import { useEffect, useState, ReactNode, useRef } from 'react'

export const Signin: Component = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<ReactNode | null>(null);

  useEffect( () => {
    (async() => {
      setLoading(true);

      const request = await fetch('/api/v1/form/signin/');
      const data = await request.text()
      const Form = () => <div dangerouslySetInnerHTML={{__html: data}}></div>
      form.current = <Form/>

      setLoading(false);
    })()

    return () => setLoading(false)
  }, []);

  if (loading) {
    return <p>loading form...</p>
  }

  return (
    <>
    {form.current}
    </>
  )
};
