import {expect} from 'chai';
import sinon from 'sinon';
import SuggestionsService from '../../src/services/SuggestionsService';
import WalletSelectionService from '../../src/services/WalletSelectionService';
import {sleep} from '@universal-login/commons';

describe('SuggestionsService', () => {
  let service;
  let walletSelectionService;

  const sdk = {walletContractExist: sinon.fake.returns(Promise.resolve(true))};

  before(() => {
    walletSelectionService = new WalletSelectionService(sdk, ['my.eth', 'log.eth']);
    service = new SuggestionsService(walletSelectionService, {debounceTime: 5});
  });

  it('call callback with proper arguments', async () => {
    const callback = sinon.spy();
    service.setCallback(callback);
    service.getSuggestions('a');
    expect(callback).to.have.been.calledWith({busy: true});
    await sleep(10);
    expect(callback).to.have.been.calledWith({busy: false, connections: ['a.my.eth', 'a.log.eth'], creations: [], walletContract: 'a'});
  });
});
