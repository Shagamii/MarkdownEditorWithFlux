import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/github';

import * as markdownEdtorAction from './Actions/markdownEditorAction';

import './App.css';

class MarkdownEditor extends Component {
  render() {
    const { code } = this.props.markdownEdtor;
    return (
      <div className="App">
        <div className="container">
          <div className="Form">
            <AceEditor
              mode='markdown'
              theme='github'
              value={ code }
              onChange={ this.onChange }
               />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  markdownEdtor: state.markdownEdtor
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(markdownEdtorAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditor);
