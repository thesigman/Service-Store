import styles from './card.module.scss'
import Card from './card.js'
import MessageCard from './messageCard.js'

export default function taskCard (props) {

  

  return(
    <div className={[props.cardBg, 'm-2' , 'p-2'].join(' ')}>
      <h3 className="text-white">{props.title}</h3>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </div>
    </div>
  )
}