import renderHook from '../../src/util/renderHook'
import useRouter from './useRouter'

describe('useRouter', () => {
  it('should be defined', () => {
    expect(useRouter).toBeDefined()
  })

  it('should update route', () => {
    renderHook(() => {
      const { route, router } = useRouter()
      expect(route.value.name).toBe('index')
      expect(route.value.meta.title).toBe('Vue Hooks')
      router.push('/test')
      expect(route.value.name).toBe('404')
      expect(route.value.meta.title).toBe('404 - Not Found')
    })
  })
})
