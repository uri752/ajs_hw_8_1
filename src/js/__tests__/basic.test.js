/*import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */

import Validator from '../app'

test('should be valid', () => {
  const validator = new Validator();
  const username = 'user8a';
  const result = validator.validateUsername(username);
  expect(result).toBe(true);
}) 

test('should not be valid', () => {
  const validator = new Validator();  
  const username = '8888user';
  const result = validator.validateUsername(username);
  expect(result).toBe(false);
}) 


