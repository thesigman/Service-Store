import styles from './step.module.scss'

export default function Step(props) {
  return (
    <div>
      <div className='row'>
        <div className={[styles.progress, 'bg-primary'].join(' ')}></div>
      </div>
      <div className='row'>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">Βήμα {props.step}</label>
      </div>
    </div>
  )
}
