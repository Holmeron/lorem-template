import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { Field, reduxForm, formValueSelector } from 'redux-form';


import Grid from 'material-ui/Grid';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';

import LoremFormReducer from './LoremFormReducer';
import {LoremOutputActions} from '../LoremOutput';


class LoremForm extends Component {

 componentDidMount() {
  }

  onChange(e){

  }

  render() {
    const {loremForm} = this.props;
    const styles= {
      toggle: {
        marginBottom: 16,
      }
    }
    return (
      <form className="lorem-form" ref="loremForm">

          <Grid container>
              <Grid item md={6}>
              <label htmlFor="isShuffled">Random order ?</label>
              </Grid>
              <Grid item md={6}>
                  <Field
                    name="isShuffled"
                    component="input"
                    type="checkbox"
                    onChange={this.onChange}
                  />
              </Grid>
          </Grid>

          <Grid container>
              <Grid item md={6}>
                <label>Number of paragraph</label>
              </Grid>
              <Grid item md={6}>
                <Field name="loremAmount" component="input" type="number" onChange={this.onChange}/>
              </Grid>
          </Grid>
      </form>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    initialValues: state.LoremForm.form,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: LoremFormReducer,
    changedFormData: (data) => {
      console.log('dispatching ',data);
      return dispatch(LoremOutputActions.changedFormData(data))
    }
  }
}

LoremForm = reduxForm({
  form: 'loremForm',
  onChange: (values,dispatch)=>{
    dispatch(LoremOutputActions.changedFormData(values))
  },
})(LoremForm);

LoremForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoremForm);

export default LoremForm;
