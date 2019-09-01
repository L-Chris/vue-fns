# useTitle

Vue hook that tracks dimensions of the browser window.

## Usage

```jsx {6,11}
import { createComponent } from '@vue/composition-api';
import { useTitle } from 'vue-fns';

const Demo = createComponent({
  setup() {
    const { title } = useTitle('title');
    return { title };
  },

  render() {
    const { title } = this;
    return (
      <div>
        <div>title: {title}</div>
      </div>
    );
  },
});
```

## Reference

```typescript
function useTitle(): {
  title: Ref<string>;
};
```

### `ReturnValue`

- `title`: [`Ref<string>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)
