/*
 * MyPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useInjectReducer } from 'utils/injectReducer';
// import { makeSelectFeatures } from 'containers/App/selectors';
import reducer from './reducer';
import { changeFeature } from './actions';
import { makeSelectFeature, makeSelectFeatures } from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const key = 'my1';

export function FeatureSelect({ feature, features, onChangeFeature }) {
  useInjectReducer({ key, reducer });
  //   useInjectSaga({ key, saga });

  //   useEffect(() => {
  //     // When initial state username is not null, submit the form to load repos
  //     if (username && username.trim().length > 0) onSubmitForm();
  //   }, []);

  const classes = useStyles();

  let menuItemList = (
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
  );

  if (features) {
    menuItemList = features.map(featureItem => (
      <MenuItem value={featureItem.key}>{featureItem.desc}</MenuItem>
    ));
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="feature-label-placeholder">
        Feature
      </InputLabel>
      <Select
        value={feature}
        onChange={onChangeFeature}
        inputProps={{
          name: 'feature',
          id: 'feature-label-placeholder',
        }}
        displayEmpty
        name="feature"
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {menuItemList}
      </Select>
    </FormControl>
  );
}

FeatureSelect.propTypes = {
  feature: PropTypes.string,
  features: PropTypes.array,
  onChangeFeature: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  feature: makeSelectFeature(),
  features: makeSelectFeatures(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFeature: evt => dispatch(changeFeature(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FeatureSelect);
