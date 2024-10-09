import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateAmount} = props
  const {value} = denominationDetails

  const changeAmount = () => {
    updateAmount(value)
  }

  return (
    <li>
      <button className="denomination-btn" type="button" onClick={changeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
