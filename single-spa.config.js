import {registerApplication, start} from 'single-spa'
import Publisher from './Publisher.js';
import {initPublisher} from './lib/initPublisher.js';

window.Publisher = new Publisher();

registerApplication(
  // Name of our single-spa application
  initPublisher('nav'),
  // Our loading function
  () => {
    return window.System.import('@portal/nav')
  },
  // Our activity function
  () => {
    return location.pathname.startsWith('/')
  }
);

registerApplication(
  // Name of our single-spa application
  initPublisher('home'),
  // Our loading function
  () => {
    return window.System.import('@portal/react')
  },
  // Our activity function
  () => location.pathname.startsWith('/home')
);

registerApplication(
  // Name of our single-spa application
  initPublisher('vue-spa'),
  // Our loading function
  () => {
    return window.System.import('@portal/vue')
  },
  // Our activity function
  () => {
    return location.pathname.startsWith('/vue')
  }
);

start()