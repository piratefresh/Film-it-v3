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
      <Card username="Tom Doe" text="Temple" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Sally Willis" text="Draxel" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Lilly Thorn" text="West Philly" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1504884790557-80daa3a9e621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Peter Really" text="U Penn" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Clark Kent" text="Temple" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Gohang Deng" text="Temple" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1542838776-95074863c536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Parika Mhm" text="Temple" location="Philadelphia, PA" avatarurl="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      <Card username="Chill Yang" text="Ohio State" location="Colombus, OH" avatarurl="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
    </Hero>

  </Layout>
)

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  margin-left: 4em;
  margin-top: 2em;
`

export default Home
