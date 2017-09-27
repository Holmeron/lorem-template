import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class LoremOutput extends Component {

 componentDidMount() {
  }



  render() {
    const {output} = this.props;
    return (
      <div>
        <ul>
            {
              output ?
                output.map((text,index)=>
                  <li key={ index }>{text}</li>
                )
              : null
            }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    output : state.LoremOutput.output
  }
};

export default connect(
  mapStateToProps)(LoremOutput);
