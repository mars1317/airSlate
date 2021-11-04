import EmailField from '../UI/EmailField/EmailField';
import classes from './InternalEmail.module.scss';

function InternalEmail() {
  return(
    <section className={classes.InternalEmail}>
      <div className="SectionIntro">
        <h2 className={[classes.SectionTitle, 'SectionTitle'].join(' ')}>
          Internal Email
        </h2>
        <p className="SectionDescription">
          Send documents to this email as an attachment and they will show up in your InBox Folder.
        </p>
      </div>
      <EmailField/>
    </section>
  )
}

export default InternalEmail;