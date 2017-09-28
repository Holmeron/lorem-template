import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Grid from 'material-ui/Grid';

import {LoremForm} from '../LoremForm'
import {LoremOutput} from '../LoremOutput'

class LoremGenerator extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="">
          <Grid container item spacing={24}>
              <Grid item xs={12} md={6}>
                  <LoremForm />
              </Grid>
              <Grid item xs={12} md={6}>
                  <LoremOutput />
              </Grid>
          </Grid>
      </div>
    )
  }
}

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps)(LoremGenerator);
