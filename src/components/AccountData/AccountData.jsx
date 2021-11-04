import classes from './AccountData.module.scss';
import AccountDataArray from '../../assets/data/accountData';
import {uid} from 'react-uid';

function AccountData() {
  return(
    <section className={classes.AccountData}>
      <ul className={classes.List}>
        {AccountDataArray.map( (accountDataItem)=> {
          return (
            <li className={classes.ListItem} key={uid(accountDataItem)}>
              <p className={classes.DataField}>{accountDataItem.DataField}</p>
              <p className={classes.DataValue}>{accountDataItem.DataValue}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default AccountData;