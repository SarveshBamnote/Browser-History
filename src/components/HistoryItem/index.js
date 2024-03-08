import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="info-container">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>

      <div className="info-container-mobile">
        <p className="time">{timeAccessed}</p>
        <div className="img-title-mobile">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="title-url-mobile">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
        type="button"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
