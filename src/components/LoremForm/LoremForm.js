import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Grid from 'material-ui/Grid';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';

import {LoremOutputActions} from '../LoremOutput';


class LoremForm extends Component {

 componentDidMount() {
  }

  onFormChange(e,val){
    const { loremForm, changedFormData } = this.props;
    changedFormData(loremForm);
  }

  onSubmit(e){

    e.preventDefault();
  }

  render() {
    const {loremForm} = this.props;
    const styles= {
      toggle: {
        marginBottom: 16,
      }
    }
    return (
      <form className="lorem-form" ref="loremForm" onSubmit={this.onSubmit}>

          <Grid container>
              <Grid item md={6}>
              <label htmlFor="isShuffled">Random order ?</label>
              </Grid>
              <Grid item md={6}>
                  <Field
                    name="isShuffled"
                    component="input"
                    type="checkbox"
                    onChange={this.onFormChange.bind(this)}
                  />
              </Grid>
          </Grid>

          <Grid container>
              <Grid item md={6}>
                <label>Number of paragraph</label>
              </Grid>
              <Grid item md={6}>
                <Field name="loremAmount" component="input" type="number" onChange={this.onFormChange.bind(this)} />
              </Grid>
          </Grid>
      </form>
    )
  }
}

LoremForm = reduxForm({
  form: 'loremForm'
})(LoremForm);

const mapStateToProps = (state) => {
  const selector = formValueSelector('loremForm');
  const { isShuffled, loremAmount } = selector(state, 'isShuffled', 'loremAmount');
  const loremForm = {
    isShuffled,
    loremAmount
  }

  return {
    loremForm : state.LoremForm.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changedFormData: (data) => {
      console.log('dispatching ',data);
      return dispatch(LoremOutputActions.changedFormData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoremForm);
