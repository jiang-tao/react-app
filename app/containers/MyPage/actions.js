/*
 * Test Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME, CHANGE_CATEGORY, CHANGE_FEATURE } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} category The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_CATEGORY
 */
export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} feature The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_FEATURE
 */
export function changeFeature(feature) {
  return {
    type: CHANGE_FEATURE,
    feature,
  };
}
