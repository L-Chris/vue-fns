import { storiesOf } from '@storybook/vue'
import { createComponent } from '@vue/composition-api'
import Vue from 'vue'

import { ShowDocs } from '../../src/components'
import useTitle from './useTitle'

type Inject = {
  title: string
}

const Docs = () => <ShowDocs md={require('./useTitle.md')} />

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
