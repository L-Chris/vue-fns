import { VueConstructor } from 'vue'

import { setRuntimeVM } from './util/runtime'

export * from '../packages/useDate/useDate'
export { default as useDate } from '../packages/useDate/useDate'
export { default as useTitle } from '../packages/useTitle/useTitle'
export { default as useWindowSize } from '../packages/useWindowSize/useWindowSize'
export { default as useCounter } from '../packages/useCounter/useCounter'
export { default as usePrevious } from '../packages/usePrevious/usePrevious'
export { default as useStore } from '../packages/useStore/useStore'
export { default as useState } from '../packages/useState/useState'
export { default as useGetters } from '../packages/useGetters/useGetters'
export { default as useMutations } from '../packages/useMutations/useMutations'
export { default as useActions } from '../packages/useActions/useActions'
export { default as useRouter } from '../packages/useRouter/useRouter'
export { default as useTimeout } from '../packages/useTimeout/useTimeout'
export { default as useMedia } from '../packages/useMedia/useMedia'

export default function install(Vue: VueConstructor) {
  Vue.mixin({ beforeCreate: setRuntimeVM })
}
