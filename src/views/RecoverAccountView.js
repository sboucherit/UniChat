import PropTypes from 'prop-types';
import React, {Component} from 'react';

class RecoverAccountView extends Component {
  render() {
    return (
      <div className="login-view">
        <div className="container">
          <h1 className="main-title">Account Recovery</h1>
          <p className="login-view-text">
            Enter a recovery code and click unlock.
          </p>
          <h2>{this.props.walletContract.name}</h2> <br />
          <input
            className="input login-view-input"
            type="text"
            onChange={(event) => this.props.onChange(event)}
            placeholder="Enter recovery code."
          />
          <div>
            <b>
              {this.props.isLoading ? (
                <div>
                  <br />
                  <div className="circle-loader" />{' '}
                  <strong>Recovering Account...</strong>
                </div>
              ) : (
                <button
                  className="btn fullwidth cancel-btn"
                  onClick={this.props.onRecoverClick.bind(this)}
                >
                  Recover Account
                </button>
              )}
            </b>
          </div>
          <p>{this.props.message}</p>
          <button
            className="secondary-btn"
            onClick={this.props.onCancelClick.bind(this)}
          >
            Cancel request
          </button>
        </div>
      </div>
    );
  }
}

RecoverAccountView.propTypes = {
  message: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  walletContract: PropTypes.object,
  onCancelClick: PropTypes.func,
  onRecoverClick: PropTypes.func
};

export default RecoverAccountView;
