import { actions } from 'tarnish';

export function toggleColor() {
  return actions.state.merge(function ({ color }) {
    return { color: color === 'blue' ? 'green' : 'blue' };
  })
}
