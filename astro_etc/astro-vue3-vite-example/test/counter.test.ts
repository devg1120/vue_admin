import { useCounterStore } from '@stores/counter';
import { createPinia, setActivePinia } from 'pinia';
import { assert, beforeEach, expect, test } from 'vitest';

//Create tests to check if counter store is working
test('Counter Store', () => {
  let counterStore: ReturnType<typeof useCounterStore>;

  beforeEach(() => {
    setActivePinia(createPinia());

    counterStore = useCounterStore();
  });

  test('Counter Store is defined', () => {
    expect(counterStore).toBeDefined();
  });

  test('Counter Store has a counter', () => {
    expect(counterStore.counter).toBeDefined();
  });

  test('Counter Store has a increment function', () => {
    expect(counterStore.increment).toBeDefined();
  });

  test('Counter Store increment function works', () => {
    counterStore.increment();
    expect(counterStore.counter).toBe(1);
  });
});
