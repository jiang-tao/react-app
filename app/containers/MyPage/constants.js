/*
 * MyConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/My/CHANGE_USERNAME';
export const CHANGE_CATEGORY = 'boilerplate/My/CHANGE_CATEGORY';
export const CHANGE_FEATURE = 'boilerplate/My/CHANGE_FEATURE';

export const FEATURES_ALL = [
  { key: 'feature1', desc: 'Feature 1', cat: 'odd' },
  { key: 'feature2', desc: 'Feature 2', cat: 'even' },
  { key: 'feature3', desc: 'Feature 3', cat: 'odd' },
  { key: 'feature4', desc: 'Feature 4', cat: 'even' },
];
