import { ref, watch } from '@vue/composition-api'

const useTitle = (initialValue: string) => {
  const title = ref(initialValue)

  watch(() => {
    document.title = title.value
  })

  return {
    title
  }
}

export default useTitle
