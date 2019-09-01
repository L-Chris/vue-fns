import { RenderContext } from 'vue'

export interface DocsProps {
  md: { default: string }
}

const ShowDocs = ({ props }: RenderContext<DocsProps>) => (
  <div class="markdown-body" domPropsInnerHTML={props.md.default} />
)

export default ShowDocs
