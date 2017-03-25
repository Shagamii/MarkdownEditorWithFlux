import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import ReactMarkdown from 'react-markdown'

import 'brace/mode/markdown';
import 'brace/theme/github';

import * as markdownEdtorAction from './Actions/markdownEditorAction';

import './App.css';

class MarkdownEditor extends Component {
  static propTypes = {
    markdownEdtor: PropTypes.object.isRequired,
  }

  onChangeCode = newValue =>
   this.props.onChangeCode(newValue);

  render() {
    const { code } = this.props.markdownEdtor;
    return (
      <div className="App">
        <div className="container">
          <h1>MarkdownEditor with Redux</h1>
          <div className="form">
            <AceEditor
              mode='markdown'
              theme='github'
              value={ code }
              onChange={ this.onChangeCode }
               />
          </div>
          <div className="markdown">
            <ReactMarkdown
              source={ code }
              onChange={ this.onChangeCode }
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
