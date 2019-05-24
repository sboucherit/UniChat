import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../helpers/classnames';

function WalletCreated(props) {
  const classes = classnames({
    animated: props.status === 'fresh',
    'checkmark-ico': true,
    'icon-check': true
  });
  return (
    <div className="row">
      <span className={classes} />
      <div>
        <strong>You created a new account</strong>
        <p>
          Received 20 <em>kliks</em>
        </p>
      </div>
    </div>
  );
}

WalletCreated.propTypes = {
  status: PropTypes.string
};

export default WalletCreated;
