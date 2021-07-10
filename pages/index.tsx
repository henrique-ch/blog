import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/header'  
import Navigation from '@components/navigation'

export default function Home() {
  return (  
    <>
      <main>  
        < Navigation/>
        < Header />
      </main>
    </>

  )
}
