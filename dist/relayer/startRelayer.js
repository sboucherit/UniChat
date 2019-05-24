'use strict';

var _relayer = require('@universal-login/relayer');

require('dotenv').config();

var config = require('./config');

var relayer = new _relayer.TokenGrantingRelayer(config);
relayer.start().catch(console.error);