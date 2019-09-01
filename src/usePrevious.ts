import { Ref, ref, watch } from '@vue/composition-api'

export default function usePrevious<T>(state: Ref<T> | (() => T)) {
  const previous = ref<T>()

  watch(state, (_, oldVal) => {
    previous.value = oldVal
  })

  return previous
}
