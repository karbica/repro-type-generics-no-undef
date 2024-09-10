// @vitest-environment happy-dom

import { expect, it, vi } from 'vitest';
import Attach from '~/lib/components/Attach.svelte';
import { render } from '@testing-library/svelte';
import { useMouseCoords } from '~/lib/runes/use-mouse-coords.svelte';

it('adds `mousemove` event listener on mount', () => {
  const event = new MouseEvent('mousemove', { clientX: 1, clientY: 1 });
  const spy = vi.spyOn(window, 'addEventListener');

  const { component } = render(Attach, { fn: () => useMouseCoords() });
  const state = component.state as ReturnType<typeof useMouseCoords>;

  expect(state.x).toEqual(0);
  expect(state.y).toEqual(0);
  expect(spy).toHaveBeenCalledOnce();

  window.dispatchEvent(event);

  expect(state.x).toEqual(1);
  expect(state.y).toEqual(1);
});
