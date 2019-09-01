import renderHook from '../../src/util/renderHook'
import useTitle from './useTitle'

interface InjectTitle {
  title: string
}

describe('useTitle', () => {
  it('should be defined', () => {
    expect(useTitle).toBeDefined()
  })

  it('should update document title', async () => {
    const { vm } = renderHook<InjectTitle>(useTitle)
    vm.title = 'title'
    await vm.$nextTick()
    expect(document.title).toBe('title')
  })
})
