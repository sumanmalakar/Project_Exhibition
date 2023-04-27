/* eslint-disable react-hooks/exhaustive-deps */
import React , {useEffect} from 'react'
import { useRouter } from 'next/router'


export default function MyAccount() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])


  return (
    <div className="my-[5rem] text-center ">
      <h1>This is my MyAccount page</h1>
    </div>
  )
}
