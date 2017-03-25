import { actionTypes } from '../actionTypes';

const { MARKDOWN_EDITOR } = actionTypes;

function initialState() {
  return { code: "" };
};

function whenChageCode(state, code) {
  return { ...state, code };
}

export default function markdownEdtor(state = initialState(), event) {
  switch (event.type) {
  case MARKDOWN_EDITOR.CHANGE_CODE:
    return whenChageCode(state, event.newValue);
  default:
    return state;
  }
}
