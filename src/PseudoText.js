/**
 * React Native Text bindings
 *
 * Used for text manipulation in React Native
 */

import React from 'react';
import { Text } from 'react-native';
import { PseudoContext } from './PseudoProvider';
import localizeString from './localizeString';

const isNewTextVersion = !!Text.render;
const defaultTextRender = isNewTextVersion
  ? Text.render
  : Text.prototype.render; // reference to original render method
let isInitialized = false; // flag to check if render is already overwritten

// process children array and localize strings
function procesArray(array) {
  if (!array || !Array.isArray(array)) {
    return array;
  }
  return array.map((item, index) => {
    if (typeof item === 'string') {
      return localizeString(item);
    }
    return item;
  });
}
// localize string
function pseudoText(children) {
  return typeof children === 'string'
    ? localizeString(children)
    : procesArray(children);
}

// React native text render logic
function renderText(args, that) {
  if (isNewTextVersion) {
    args[0] = { ...args[0], children: pseudoText(args[0].children) };
    return defaultTextRender.apply(that, args);
  } else {
    const element = defaultTextRender.apply(that, args);
    return React.cloneElement(element, {
      children: pseudoText(element.props.children),
    });
  }
};

// main render function that is connected to PseudoContext
function render() {
  return function(...args) {
    return (
      <PseudoContext.Consumer>
        {value => {
          if (!value) {
            return defaultTextRender.apply(this, args);
          }
          return renderText(args, this);
        }}
      </PseudoContext.Consumer>
    );
  };
}

// Overwrite default Text.render method
export function init() {
  if (isInitialized) {
    return;
  }
  isInitialized = true;
  if (isNewTextVersion) {
    Text.render = render();
  } else {
    Text.prototype.render = render();
  }
}
