import { storiesOf } from '@storybook/vue'
import { createComponent } from '@vue/composition-api'
import Vue from 'vue'

import { useGetters, useStore } from '..'
import { createStore } from '../mocks'
import { ShowDocs } from './components'

type Inject = {
  plusOne: number
  minusOne: number
}

const Docs = () => <ShowDocs md={require('../../docs/useGetters.md')} />

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
