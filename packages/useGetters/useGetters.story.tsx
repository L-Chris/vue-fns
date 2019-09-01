import { storiesOf } from '@storybook/vue'
import { createComponent } from '@vue/composition-api'
import Vue from 'vue'

import { ShowDocs } from '../../src/components'
import { createStore } from '../../src/mocks'
import useStore from '../useStore/useStore'
import useGetters from './useGetters'

type Inject = {
  plusOne: number
  minusOne: number
}

const Docs = () => <ShowDocs md={require('./useGetters.md')} />

const Demo = createComponent({
  store: createStore(),

  setup() {
    const store = useStore()
    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne'])
    }

    store.value.dispatch('incrementAsync')
    store.value.dispatch('test/decrementAsync')

    return { ...getters }
  },

  render(this: Vue & Inject) {
    const { plusOne, minusOne } = this
    return (
      <div>
        <div>plusOne: {plusOne}</div>
        <div>test/minusOne: {minusOne}</div>
      </div>
    )
  }
})

storiesOf('useGetters', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo)
