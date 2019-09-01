import { onMounted, onUnmounted } from '@vue/composition-api'

import renderHook from '../../src/util/renderHook'
import useTimeout from './useTimeout'

describe('useTimeout', () => {
  it('should be defined', () => {
    expect(useTimeout).toBeDefined()
  })

  it('should return true after 3000ms', () => {
    const { vm } = renderHook<unknown>(() => {
      jest.useFakeTimers()
      const ready = useTimeout(3000)
      expect(ready.value).toBe(false)

      onMounted(() => {
        expect(jest.getTimerCount()).toBe(1)
        jest.runOnlyPendingTimers()
        expect(ready.value).toBe(true)
      })

      onUnmounted(() => {
        expect(jest.getTimerCount()).toBe(0)
      })
    })

    vm.$destroy()
  })
})
