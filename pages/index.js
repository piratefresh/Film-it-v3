import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Nav from '../components/nav/Nav'
import Card from '../components/card/Card'


const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    
    <Hero>
      <Card username="Tom Doe" price="100$"/>
      <Card username="Tom Doe" price="100$"/>
      <Card username="Tom Doe" price="100$"/>
      <Card username="Tom Doe" price="100$"/>
    </Hero>

  </Layout>
)

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4em;
`

export default Home
