import React from 'react'
import { Categories, Header, MoreEvents, Partners, Trending } from '../containers'

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <Categories />
      <Trending />
      <MoreEvents />
    </>
  )
}
