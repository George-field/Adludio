import prefixer from './prefixer';

const prefix = '@@awsTypes';

const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};

export default prefixer(types, prefix);
