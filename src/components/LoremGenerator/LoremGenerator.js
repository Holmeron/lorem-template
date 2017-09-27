import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import {LoremForm} from '../LoremForm'
import {LoremOutput} from '../LoremOutput'

class LoremGenerator extends Component {

 componentDidMount() {
  }

  render() {
    return (
        <div className='row lorem-generator'>
            <div className='col-md-6'>
                <LoremForm />
            </div>
            <div className='col-md-6'>
                <LoremOutput />
            </div>
        </div>
    )
  }
}

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps)(LoremGenerator);
