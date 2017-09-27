import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class LoremForm extends Component {

 componentDidMount() {
  }



  render() {
    const {form} = this.props;
    return (
      <form className="lorem-form">
          <div className="form-group row">
              <label className="col-sm-2 col-form-label">Html tag in output ?</label>
              <div className="col-sm-10">
                  <input type="checkbox" defaultValue={form.htmlTags} />
              </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Number of paragraph</label>
            <div className="col-sm-10">
                <input type="number" defaultValue={form.loremAmount} />
            </div>
          </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    form : state.LoremForm.form
  }
};

export default connect(
  mapStateToProps)(LoremForm);
