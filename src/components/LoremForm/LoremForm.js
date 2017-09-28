import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import LoremOutputActions from '../LoremOutput';

import Grid from 'material-ui/Grid';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';

class LoremForm extends Component {

 componentDidMount() {
  }

  onFormChange(){
    const { form, changedFormData } = this.props;
    console.log('form : ',form);
    changedFormData(form);
  }

  onSubmit(e){
    e.preventDefault();
  }

  render() {
    const {form} = this.props;
    const styles= {
      toggle: {
        marginBottom: 16,
      }
    }
    return (
      <form className="lorem-form" ref="loremForm" onSubmit={this.onSubmit}>

          <Grid container>
              <Grid item md={6}>
                <label>Random order ?</label>
              </Grid>
              <Grid item md={6}>
                  <Switch
                    defaultValue={form.isShuffled}
                    onChange={this.onFormChange.bind(this)}
                  />
              </Grid>
          </Grid>

          <Grid container>
              <Grid item md={6}>
                <label>Number of paragraph</label>
              </Grid>
              <Grid item md={6}>
                  <input type="number" value={form.loremAmount} onChange={this.onFormChange.bind(this)} />
              </Grid>
          </Grid>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    form : state.LoremForm.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changedFormData: (data) => {
      dispatch(LoremOutputActions.changedFormData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoremForm);
