import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-svelte'],
  srcDir: 'src',
  alias: { '~': './src/' },
  manifest: {
    name: 'XXX',
    description: 'XXX',
    action: {},
    permissions: ['webRequest'],
  },
  runner: {
    openConsole: true,
    openDevtools: true,
    startUrls: ['https://wxt.dev'],
  },
});
