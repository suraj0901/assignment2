import { useState, useEffect } from 'react';
import { produce } from 'immer';

const reRenderListeners = (listeners) => {
  for (const fuc of listeners.keys()) {
    fuc((val) => !val);
  }
};

export const customStore = (state, actions) => {
  if (typeof state !== 'object')
    throw Error('state should be an Object or array');

  const listeners = new Map();
  const newAction = {};
  for (const action in actions) {
    newAction[action] = (...arg) => {
      state = produce(state, (draft) => {
        actions[action](draft, ...arg);
      });
      reRenderListeners(listeners);
    };
  }
  return (shouldListene = true) => {
    const setState = useState(true)[1];
    useEffect(() => {
      if (shouldListene) {
        listeners.set(setState, 1);
        return () => listeners.delete(setState);
      }
    });
    return [state, newAction];
  };
};
