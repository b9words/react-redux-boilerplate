import {
  SAMPLE_ACTION_TYPE,
} from 'redux/types';

const INITIAL_STATE = {
  isSignedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return {
        ...state,
        isSignedIn: true,
      };
    default:
      return state;
  }
};
