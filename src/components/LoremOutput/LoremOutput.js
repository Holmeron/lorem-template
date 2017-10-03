import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Assignment from 'material-ui-icons/Assignment';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';

import * as LoremOutputActions from './LoremOutputActions';
require('./LoremOutput.scss');

class LoremOutput extends Component {

  componentDidMount() {
  }

  getSnackBarAnchorOrigin(){
      return {
        vertical: 'bottom',
        horizontal: 'right',
      }
  }
  getSnackBarContent(){
      return <span>Text copied to clipboard !</span>;
  }

  getTextToCopy(){
    const {onCopyText} = this.props;
    const {output} = this.refs;
    onCopyText(output);
  }
  getOutputText(){
    const {output} = this.props;
    if(output){
      return output.map((text)=>text.join('\n'))
    }
  }

  render() {
    const {output,snackBarOpen,onCopyText,closeSnackBar} = this.props;
    return (
      <div className="lorem-output">
          <Paper>
              <AppBar position="static">
                    <Toolbar>
                        <Typography>
                            Output
                        </Typography>
                        <IconButton className="copy-icon" onClick={()=>{this.getTextToCopy()}}>
                          <Assignment />
                        </IconButton>
                        <Snackbar
                          anchorOrigin={ this.getSnackBarAnchorOrigin()}
                          open={snackBarOpen}
                          autoHideDuration={2000}
                          onRequestClose={closeSnackBar}
                          message={this.getSnackBarContent()}
                        />

                    </Toolbar>
                </AppBar>
                <textarea ref="output" value={this.getOutputText()}></textarea>
          </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    output : state.LoremOutput.output,
    snackBarOpen : state.LoremOutput.snackBarOpen
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCopyText: (text) => {
      return dispatch(LoremOutputActions.copyText(text))
    },
    closeSnackBar: () => {
      return dispatch(LoremOutputActions.snackBarButtonClose())
    }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps)(LoremOutput);
