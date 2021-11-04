import classes from './DocumentList.module.scss';
import '../../../index.scss';
import {uid} from 'react-uid';
import documentsData from '../../../assets/data/documentsData';
import DocumentItem from '../DocumentItem/DocumentItem';

function DocumentList() {
  return(
    <section className={classes.DocumentStatistics}>
      <h2 className='SectionTitle'> Document Statistics </h2>
      <button 
        className={classes.JobBtn} 
        name="jobListBtn" 
        aria-label="navigate to job list">
          Job list
        </button>
      <ul className={classes.List} >
        {documentsData.map( (documentsItem)=> {
          const imageUrl = require( `../../../assets/icons/documents/document_type_${documentsItem.documentLabel}.svg`).default;
          return (
            <DocumentItem 
              key= {uid(documentsItem)} 
              imageUrl = {imageUrl} 
              documentsItem = {documentsItem}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default DocumentList;