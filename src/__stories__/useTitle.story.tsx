import { storiesOf } from '@storybook/vue'
import { createComponent } from '@vue/composition-api'
import Vue from 'vue'

import { useTitle } from '..'
import { ShowDocs } from './components'

type Inject = {
  title: string
}

const Docs = () => <ShowDocs md={require('../../docs/useTitle.md')} />

const Demo = createComponent({
  setup() {
    const title = useTitle('title')
    return {
      title
    }
  },

  render(this: Vue & Inject) {
    const { title } = this

    return (
      <div>
        <div>title: {title}</div>
      </div>
    )
  }
})

storiesOf('useTitle', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo)
