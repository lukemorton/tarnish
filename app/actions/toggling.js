import { actions } from 'tarnish';

export function toggleColor() {
  return actions.state.update(function (state) {
    const color = state.color === 'blue' ? 'green' : 'blue';
    return Object.assign({}, state, { color });
  })
}
