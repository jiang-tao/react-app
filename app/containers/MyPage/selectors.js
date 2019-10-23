/**
 * Mypage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMy = state => state.my || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectMy,
    myState => myState.username,
  );

const makeSelectCategory = () =>
  createSelector(
    selectMy,
    myState => myState.category,
  );

const makeSelectFeature = () =>
  createSelector(
    selectMy,
    myState => myState.feature,
  );

const makeSelectFeatures = () =>
  createSelector(
    selectMy,
    myState => myState.features,
  );

export {
  selectMy,
  makeSelectUsername,
  makeSelectCategory,
  makeSelectFeature,
  makeSelectFeatures,
};
