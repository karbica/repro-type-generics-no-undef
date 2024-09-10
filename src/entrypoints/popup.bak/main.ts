import './app.css';
import App from './App.svelte';
import { mount } from 'svelte';

const target = document.getElementById('app');

if (!target) throw Error('Cannot find mount target to attach app.');

export default mount(App, { target });
