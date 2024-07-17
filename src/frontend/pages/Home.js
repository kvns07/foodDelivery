import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Card from '../components/card'
// import { Card } from 'react-bootstrap'
// const Footer =require('../components/Footer')
// import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div><NavBar/></div>
    <div><Carousel/></div>
    <div><Card/></div>
    <div><Footer/></div>
    </>
    
  )
}
