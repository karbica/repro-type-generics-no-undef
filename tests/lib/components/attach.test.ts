// @vitest-environment happy-dom

import { expect, it, vi } from 'vitest';
import Attach from '~/lib/components/Attach.svelte';
import { render } from '@testing-library/svelte';

it('invokes the spy within a component', () => {
  const fn = () => true;
  const spy = vi.fn().mockImplementationOnce(fn);

  const { component } = render(Attach, { fn: spy });
  const state = component.state as ReturnType<typeof fn>;

  expect(spy).toHaveBeenCalledOnce();
  expect(state).toEqual(true);
});
