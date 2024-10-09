import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amountWithdrawn: 2000}

  updateAmount = value => {
    this.setState(prevState => ({
      amountWithdrawn: prevState.amountWithdrawn - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amountWithdrawn} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <div className="name-container">
            <p className="s-letter">S</p>
            <p className="heading">Sarah Williams</p>
          </div>

          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="amount-withdrawn">{amountWithdrawn}</p>
              <p className="in-rupees">in Rupees</p>
            </div>
          </div>

          <p className="amount-withdrawn">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="btn-list">
            {denominationsList.map(denominationDetails => (
              <DenominationItem
                denominationDetails={denominationDetails}
                updateAmount={this.updateAmount}
                key={denominationDetails.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
