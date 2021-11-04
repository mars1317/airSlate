import classes from './FaxNumber.module.scss';
import Button from '../UI/Button/Button';
import ReactTooltip from "react-tooltip";

function FaxNumber() {
  return(
    <section className={classes.FaxNumber}>
      <div className="SectionIntro">
        <h2 className={[classes.SectionTitle, 'SectionTitle'].join(' ')}>
          Inbound Fax Number
          <span data-tip data-for="registerTip"></span>
          <ReactTooltip className={classes.Tooltip} id="registerTip" place="top" effect="solid">
            <p className={classes.TooltipText}>Tooltip</p> 
          </ReactTooltip>
        </h2>
        <p className="SectionDescription">
        Receive faxes online directly into your PDFfiller account.
        </p>
      </div>
      <Button buttonValue="Get Fax Number"/>
    </section>
  )
}

export default FaxNumber;