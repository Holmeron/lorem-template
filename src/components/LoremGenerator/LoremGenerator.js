import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class LoremGenerator extends Component {

 componentDidMount() {
   const {entityLink} = this.props;
  }

  render() {
    return (
        <div>
          <p>LOREM GENERATOR</p>
        </div>
    )
  }
}

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps)(LoremGenerator);
