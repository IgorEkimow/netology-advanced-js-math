import Daemon from '../Daemon';
import Magician from '../Magician';

test('Expect value of distantly attack', () => {
  const received = new Magician('Alex', 'Magician', 3);
  expect(received.attack).toBe(8);
});

test('Expect to return value of distantly attack without stoned', () => {
  const received = new Daemon('Ben', 'Daemon', 2);
  received.attack = 100;
  expect(received.attack).toBe(90);
});

test('Expect to return value of distantly attack with stoned', () => {
  const received = new Daemon('Ben', 'Daemon', 2);
  received.attack = 100;
  received.stoned = true;
  expect(received.attack).toBe(85);
});

test('Expect not to return negative value of attack', () => {
  const received = new Magician('Alex', 'Magician', 5);
  received.attack = -1;
  expect(received.attack).toBe(0);
});
