/*
 * MyPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, changeCategory, changeFeature } from './actions';
import {
  makeSelectUsername,
  makeSelectCategory,
  makeSelectFeature,
  makeSelectFeatures,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import FeatureSelect from './featureselect';

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

const key = 'my';

export function MyPage({
  username,
  loading,
  error,
  repos,
  category,
  feature,
  features,
  onSubmitForm,
  onChangeUsername,
  onChangeCategory,
  onChangeFeature,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const classes = useStyles();

  // const filterProps = {

  // }

  // const filterPanelProps = {
  //   category,
  //   feature,
  //   features,
  // };

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>My Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application Mypage"
        />
      </Helmet>
      <div>
        <Section>
          <H2>
            My Page {category}
            {/* <FormattedMessage {...messages.trymeHeader} /> */}
          </H2>
          <Form onSubmit={onSubmitForm}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="category-label-placeholder">
                Category
              </InputLabel>
              <Select
                value={category}
                onChange={onChangeCategory}
                inputProps={{
                  name: 'category',
                  id: 'category-label-placeholder',
                }}
                displayEmpty
                name="category"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="odd">Odd</MenuItem>
                <MenuItem value="even">Even</MenuItem>
              </Select>
            </FormControl>
            <FeatureSelect />
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div>
    </article>
  );
}

MyPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  category: PropTypes.string,
  feature: PropTypes.string,
  features: PropTypes.array,
  onChangeUsername: PropTypes.func,
  onChangeCategory: PropTypes.func,
  onChangeFeature: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  category: makeSelectCategory(),
  feature: makeSelectFeature(),
  features: makeSelectFeatures(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangeCategory: evt => dispatch(changeCategory(evt.target.value)),
    onChangeFeature: evt => dispatch(changeFeature(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyPage);
