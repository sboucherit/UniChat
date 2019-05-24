import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NativeNotificationService from '../services/NativeNotificationService';

class RequestsBadge extends Component {
  constructor(props) {
    super(props);
    this.walletContractService = this.props.services.walletContractService;
    this.sdk = props.services.sdk;
    this.state = {
      requests: this.sdk.relayerObserver.lastAuthorisations.length
    };
    this.nativeNotificationService = new NativeNotificationService();
  }

  componentDidMount() {
    const {address} = this.walletContractService.walletContract;
    this.subscription = this.sdk.subscribe(
      'AuthorisationsChanged',
      {contractAddress: address},
      this.onAuthorisationChanged.bind(this)
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  onAuthorisationChanged(authorisations) {
    this.setState({requests: authorisations.length});
    if (authorisations.length > 0) {
      this.nativeNotificationService.notifyLoginRequest(authorisations[0].deviceInfo);
    }
  }

  render() {
    return this.state.requests > 0 ? (
      <button
        onClick={() => this.props.setView('PendingAuthorizations')}
        className="request-notification"
      >
        {this.state.requests}
      </button>
    ) : (
      ''
    );
  }
}

RequestsBadge.propTypes = {
  setView: PropTypes.func,
  services: PropTypes.object
};

export default RequestsBadge;
