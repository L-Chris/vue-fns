import Vue from 'vue';
import { ref, reactive } from '@vue/composition-api';
import { usePrevious } from '..';
import renderHook from '../util/renderHook';

describe('usePrevious', () => {
  it('should be defined', () => {
    expect(usePrevious).toBeDefined();
  });

  it('should be previous wrapper count', () => {
    renderHook(async () => {
      const count = ref(0);
      const prevCount = usePrevious(count);

      expect(count.value).toBe(0);
      expect(prevCount.value).toBeUndefined();

      count.value += 1;

      await Vue.nextTick();
      expect(count.value).toBe(1);
      expect(prevCount.value).toBe(0);

      count.value -= 1;

      await Vue.nextTick();
      expect(count.value).toBe(0);
      expect(prevCount.value).toBe(1);
    });
  });

  it('should be previous state count', () => {
    renderHook(async () => {
      const state = reactive({ count: 0 });
      const prevCount = usePrevious(() => state.count);

      expect(state.count).toBe(0);
      expect(prevCount.value).toBeUndefined();

      state.count += 1;

      await Vue.nextTick();
      expect(state.count).toBe(1);
      expect(prevCount.value).toBe(0);

      state.count -= 1;

      await Vue.nextTick();
      expect(state.count).toBe(0);
      expect(prevCount.value).toBe(1);
    });
  });
});
