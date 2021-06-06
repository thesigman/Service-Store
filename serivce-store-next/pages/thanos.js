import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation/navigation'
import MessageCard from '../components/Card/messageCard'
import Card from '../components/Card/card'
import TaskCard from '../components/Card/taskCard';

export default function Thanos() {
  return (
    <div className="container-fluid">
      <Navigation></Navigation>
  
      </div>
  )
}
