import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { WxtVitest } from 'wxt/testing';

export default defineConfig({
  plugins: [WxtVitest(), svelte(), svelteTesting()],
});
