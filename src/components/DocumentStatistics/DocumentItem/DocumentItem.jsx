import classes from './DocumentItem.module.scss';

function DocumentItem({imageUrl, key, documentsItem}) {
  return (
    <li className={classes.ListItem} key={key}>
      <img src={imageUrl} alt={`${documentsItem.documentType}`}/>
      <p className={classes.DocumentType}>{documentsItem.documentType}</p>
      <p className={classes.DocumentWeight}>{documentsItem.documentWeight}</p>
    </li>
  )
}

export default DocumentItem;