import path from 'path';

import { BUILD, IMAGES, SCRIPTS, STYLES, VIEWS } from '../paths';

it('creates directory paths', () => {
  expect(BUILD).toBe(path.join(__dirname, '../../docs'));
  expect(IMAGES).toBe(path.join(__dirname, '../../app/images'));
  expect(SCRIPTS).toBe(path.join(__dirname, '../../app/scripts'));
  expect(STYLES).toBe(path.join(__dirname, '../../app/styles'));
  expect(VIEWS).toBe(path.join(__dirname, '../../app/views'));
});
