import classes from './Teammates.module.scss';
import Button from '../UI/Button/Button';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/style/_circular-progress-bar.scss';

function Teammates() {
  return(
    <section className={classes.Teammates}>
      <h2 className='SectionTitle'> My Teammates </h2>
      <div className={classes.Content}>
        <div className={classes.Information}>
          <CircularProgressbar value={73} text={`3`} strokeWidth = {10} />
          <p className={classes.Details}>
            <span className={classes.Title}>Shared Accounts</span>
            <span>Available: 4</span>
            <span>Used: 3</span>
          </p>
        </div>
        <Button buttonValue='Managing accounts'/>
      </div>
    </section>
  )
}

export default Teammates;