import { install } from 'offline-plugin/runtime';

jest.mock('offline-plugin/runtime');

require('../app');

it('calls the offline-plugin install script', () =>
  expect(install).toBeCalled()
);
