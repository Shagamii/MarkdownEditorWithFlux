import { actionTypes } from '../actionTypes';

const { MARKDOWN_EDITOR } = actionTypes;

export function onChangeCode(newValue) {
  return {
    type: MARKDOWN_EDITOR.CHANGE_CODE,
    newValue
  };
}
