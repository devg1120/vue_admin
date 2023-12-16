import { beforeEach, describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import WelcomeVue from '@components/Welcome.vue';

// create tests to check if welcome component is working
describe('Welcome Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('Welcome component is defined', () => {
    const wrapper = mount(WelcomeVue);

    expect(wrapper).toBeDefined();
  });
});
