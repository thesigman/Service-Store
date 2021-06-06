import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation/navigation'
import Card from '../components/Card/card'

export default function Home() {
  return (
    <div className="container-fluid">
      <Navigation></Navigation>
     <h1>Thanos</h1>
     <h2>Thanos</h2>
     <button className="btn bg-danger">Thanos</button>
     <button className="btn btn-secondary text-primary bd-primary">Thanos</button>
     <Card></Card>
    </div>
  )
}
