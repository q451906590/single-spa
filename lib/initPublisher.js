import Publisher from '../Publisher.js';

export const initPublisher = (name) => {
  if (!window.Publisher) {
    window.Publisher = new Publisher();
  }
  window.Publisher.on(name);
  return name;
}