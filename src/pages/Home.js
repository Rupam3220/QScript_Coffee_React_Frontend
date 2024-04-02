import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
            <h1>Discover the taste of authentic coffee</h1>
            <p>The best coffee comes with the best roasted seeds and expert hands.</p>
            <NavLink to="/menu"><button>Order now</button></NavLink>
          </div>
        </div>
    </Layout>
  )
}

export default Home