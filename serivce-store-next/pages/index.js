import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation/navigation'
import MessageCard from '../components/Card/messageCard'
import Card from '../components/Card/card'
import TaskCard from '../components/Card/taskCard';

export default function Home() {

  const thanos = (id) => {
    console.log(id)
  }

  return (
    <div className="container-fluid">
      <Navigation></Navigation>
      <input onChange={(event)=> thanos(event.target.value)}></input>
      <div className="row">
        <div className="col-3">
          <TaskCard
            title="To Do"
            cardBg="bg-primary"
          >
          </TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="In progess"
            cardBg="bg-secondary"></TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="Done"
            cardBg="bg-success"></TaskCard>
        </div>
        <div className="col-3">
          <TaskCard
            title="Thanos Kapsalis"
            cardBg="bg-danger"></TaskCard>
        </div>
      </div>
    </div>
  )
}
