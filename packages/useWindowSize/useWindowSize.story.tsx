import { storiesOf } from '@storybook/vue'
import { createComponent } from '@vue/composition-api'
import Vue from 'vue'

import { ShowDocs } from '../../src/components'
import useWindowSize from './useWindowSize'

type Inject = {
  width: number
  height: number
}

const Docs = () => <ShowDocs md={require('./useWindowSize.md')} />

const Demo = createComponent({
  setup() {
    const { width, height } = useWindowSize()
    return { width, height }
  },

  render(this: Vue & Inject) {
    const { width, height } = this
    return (
      <div>
        <div>width: {width}px</div>
        <div>height: {height}px</div>
      </div>
    )
  }
})

storiesOf('useWindowSize', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo)
