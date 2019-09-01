import { computed } from '@vue/composition-api'
import { getRuntimeVM } from 'vue-fns/src/util/runtime'
import { Store } from 'vuex'

export default function useStore<TState>() {
  const vm = getRuntimeVM()
  const store = computed(() => vm.$store as Store<TState>)
  return store
}
