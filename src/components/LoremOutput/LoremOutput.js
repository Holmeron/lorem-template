import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

require('./LoremOutput.scss');

class LoremOutput extends Component {

 componentDidMount() {
  }



  render() {
    const {output} = this.props;
    return (
      <div className="lorem-output">
        <ul>
            {
              output ?
                output.map((text,index)=>
                  text ?
                    text.map((line,lineIndex)=>

                      <li key={ lineIndex }>{line}</li>
                    )
                  : null
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
