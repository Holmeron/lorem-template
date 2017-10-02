import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { Scrollbars } from 'react-custom-scrollbars';

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

  render() {
    const {output,snackBarOpen,onSnackBarButtonClicked,closeSnackBar} = this.props;
    return (
      <div className="lorem-output">
          <Paper>
              <AppBar position="static">
                    <Toolbar>
                        <Typography>
                            Output
                        </Typography>
                        <IconButton className="copy-icon" onClick={onSnackBarButtonClicked}>
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
                <Scrollbars style={{ height: '80vh'}}>
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
                </Scrollbars>
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
    onSnackBarButtonClicked: () => {
      console.log('dispatch');
      return dispatch(LoremOutputActions.snackBarButtonOpen())
    },
    closeSnackBar: () => {
      console.log('close');
      return dispatch(LoremOutputActions.snackBarButtonClose())
    }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps)(LoremOutput);
