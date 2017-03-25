import { actionTypes } from '../actionTypes';

const { MARKDOWN_EDITOR } = actionTypes;

export function onChangeCode(nextValue) {
  return {
    type: MARKDOWN_EDITOR.CHANGE_CODE,
    nextValue
  };
}
