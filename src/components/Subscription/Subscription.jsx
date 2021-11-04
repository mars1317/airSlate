import classes from './Subscription.module.scss';
import Button from '../UI/Button/Button';
import '../../index.scss';
function Subscription() {
  return(
    <section className={classes.Subscription}>
      <h2 className='SectionTitle'> Current Subscription </h2>
      <ul className={[classes.List, classes.Header].join(' ')}>
        <li className={classes.ListItem}>
          <p className={classes.DataField}>Subscription Plan</p>
          <p className={classes.DataValue}>Business</p>
          <Button buttonValue = 'Upgrade Plan' filled/>
        </li>
      </ul>
      <ul className={classes.List}>
        <li className={classes.ListItem}>
          <p className={classes.DataField}>Premium Support</p>
          <p className={classes.DataValue}>Not activated</p>
        </li>
        <li className={classes.ListItem}>
          <p className={classes.DataField}>Subscription Term</p>
          <p className={classes.DataValue}>1 Month Subscription</p>
        </li>
        <li className={classes.ListItem}>
          <p className={classes.DataField}>Subscribed Date</p>
          <p className={classes.DataValue}>Dec 18, 2016 at 09:00 am</p>
        </li>
        <li className={classes.ListItem}>
          <p className={classes.DataField}>Automatic Renewal</p>
          <p className={classes.DataValue}>Dec 18, 2017 at 09:00 am</p>
        </li>
      </ul>
    </section>
  )
}

export default Subscription;