/*
 * myReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  CHANGE_CATEGORY,
  CHANGE_FEATURE,
  FEATURES_ALL,
} from './constants';

// The initial state of the App
export const initialState = {
  category: '',
  features: FEATURES_ALL,
  feature: '',
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const myReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;

      case CHANGE_CATEGORY:
        // Delete prefixed '@' from the github username
        draft.category = action.category;
        if (action.category) {
          draft.features = FEATURES_ALL.filter(
            featureObj => featureObj.cat === action.category,
          );
        } else {
          draft.features = FEATURES_ALL;
        }
        if (state.categry !== draft.category) {
          draft.feature = '';
        }
        break;

      case CHANGE_FEATURE:
        draft.feature = action.feature;
        break;
    }
  });

export default myReducer;
