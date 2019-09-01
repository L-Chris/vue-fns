<div align="center">
  <h1>
    <br/>
    <br/>
    👍
    <br />
    vue-fns
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/vue-fns">
       <img src="https://img.shields.io/npm/v/vue-fns.svg" alt="npm package" />
    </a>
    <a href="https://circleci.com/gh/streamich/vue-fns">
      <img src="https://img.shields.io/circleci/project/github/streamich/vue-fns/master.svg" alt="CircleCI master" />
    </a>
    <a href="https://www.npmjs.com/package/vue-fns">
      <img src="https://img.shields.io/npm/dm/vue-fns.svg" alt="npm downloads" />
    </a>
    <a href="http://streamich.github.io/vue-fns">
      <img src="https://img.shields.io/badge/demos-🚀-yellow.svg" alt="demos" />
    </a>
    <a href="https://opencollective.com/vue-fns" alt="Financial Contributors on Open Collective"><img src="https://opencollective.com/vue-fns/all/badge.svg?label=$$$" /></a>
    <br />
    Collection of essential <a href="https://reactjs.org/docs/hooks-intro.html">Vue Hooks</a>.</em>
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/vue-fns">vue-fns</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

- [**Sensors**](./docs/Sensors.md)
  - [`useBattery`](./docs/useBattery.md) &mdash; tracks device battery state. [![][img-demo]](https://codesandbox.io/s/qlvn662zww)
  - [`useGeolocation`](./docs/useGeolocation.md) &mdash; tracks geo location state of user's device. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usegeolocation--demo)
  - [`useHover` and `useHoverDirty`](./docs/useHover.md) &mdash; tracks mouse hover state of some element. [![][img-demo]](https://codesandbox.io/s/zpn583rvx)
  - [`useIdle`](./docs/useIdle.md) &mdash; tracks whether user is being inactive.
  - [`useKey`](./docs/useKey.md), [`useKeyPress`](./docs/useKeyPress.md), [`useKeyboardJs`](./docs/useKeyboardJs.md), and [`useKeyPressEvent`](./docs/useKeyPressEvent.md) &mdash; track keys. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usekeypressevent--demo)
  - [`useLocation`](./docs/useLocation.md) &mdash; tracks page navigation bar location state.
  - [`useMedia`](./docs/useMedia.md) &mdash; tracks state of a CSS media query. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usemedia--demo)
  - [`useMediaDevices`](./docs/useMediaDevices.md) &mdash; tracks state of connected hardware devices.
  - [`useMotion`](./docs/useMotion.md) &mdash; tracks state of device's motion sensor.
  - [`useMouse` and `useMouseHovered`](./docs/useMouse.md) &mdash; tracks state of mouse position. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usemouse--docs)
  - [`useNetwork`](./docs/useNetwork.md) &mdash; tracks state of user's internet connection.
  - [`useOrientation`](./docs/useOrientation.md) &mdash; tracks state of device's screen orientation.
  - [`usePageLeave`](./docs/usePageLeave.md) &mdash; triggers when mouse leaves page boundaries.
  - [`useScroll`](./docs/useScroll.md) &mdash; tracks an HTML element's scroll position. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usescroll--docs)
  - [`useScrolling`](./docs/useScrolling.md) &mdash; tracks whether HTML element is scrolling.
  - [`useSize`](./docs/useSize.md) &mdash; tracks an HTML element's dimensions.
  - [`useStartTyping`](./docs/useStartTyping.md) &mdash; detects when user starts typing.
  - [`useWindowScroll`](./docs/useWindowScroll.md) &mdash; tracks `Window` scroll position. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/sensors-usewindowscroll--docs)
  - [`useWindowSize`](./docs/useWindowSize.md) &mdash; tracks `Window` dimensions. [![][img-demo]](https://codesandbox.io/s/m7ln22668)
    <br/>
    <br/>
- [**UI**](./docs/UI.md)
  - [`useAudio`](./docs/useAudio.md) &mdash; plays audio and exposes its controls. [![][img-demo]](https://codesandbox.io/s/2o4lo6rqy)
  - [`useClickAway`](./docs/useClickAway.md) &mdash; triggers callback when user clicks outside target area.
  - [`useCss`](./docs/useCss.md) &mdash; dynamically adjusts CSS.
  - [`useDrop` and `useDropArea`](./docs/useDrop.md) &mdash; tracks file, link and copy-paste drops.
  - [`useFullscreen`](./docs/useFullscreen.md) &mdash; display an element or video full-screen. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/ui-usefullscreen--demo)
  - [`useSpeech`](./docs/useSpeech.md) &mdash; synthesizes speech from a text string. [![][img-demo]](https://codesandbox.io/s/n090mqz69m)
  - [`useVideo`](./docs/useVideo.md) &mdash; plays video, tracks its state, and exposes playback controls. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/ui-usevideo--demo)
  - [`useWait`](./docs/useWait.md) &mdash; complex waiting management for UIs.
    <br/>
    <br/>
- [**Animations**](./docs/Animations.md)
  - [`useRaf`](./docs/useRaf.md) &mdash; re-renders component on each `requestAnimationFrame`.
  - [`useInterval`](./docs/useInterval.md) and [`useHarmonicIntervalFn`](./docs/useHarmonicIntervalFn.md) &mdash; re-renders component on a set interval using `setInterval`.
  - [`useSpring`](./docs/useSpring.md) &mdash; interpolates number over time according to spring dynamics.
  - [`useTimeout`](./docs/useTimeout.md) &mdash; re-renders component after a timeout.
  - [`useTimeoutFn`](./docs/useTimeoutFn.md) &mdash; calls given function after a timeout. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/animation-usetimeoutfn--demo)
  - [`useTween`](./docs/useTween.md) &mdash; re-renders component, while tweening a number from 0 to 1. [![][img-demo]](https://codesandbox.io/s/52990wwzyl)
  - [`useUpdate`](./docs/useUpdate.md) &mdash; returns a callback, which re-renders component when called.
    <br/>
    <br/>
- [**Side-effects**](./docs/Side-effects.md)
  - [`useAsync`](./docs/useAsync.md) &mdash; resolves an `async` function.
  - [`useAsyncFn`](./docs/useAsyncFn.md) &mdash; state management for an async function
  - [`useAsyncRetry`](./docs/useAsyncRetry.md) &mdash; `useAsync` with `retry()` method.
  - [`useBeforeUnload`](./docs/useBeforeUnload.md) &mdash; shows browser alert when user try to reload or close the page.
  - [`useCopyToClipboard`](./docs/useCopyToClipboard.md) &mdash; copies text to clipboard.
  - [`useDebounce`](./docs/useDebounce.md) &mdash; debounces a function. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/side-effects-usedebounce--demo)
  - [`useFavicon`](./docs/useFavicon.md) &mdash; sets favicon of the page.
  - [`useLocalStorage`](./docs/useLocalStorage.md) &mdash; manages a value in `localStorage`.
  - [`useLockBodyScroll`](./docs/useLockBodyScroll.md) &mdash; lock scrolling of the body element.
  - [`useRafLoop`](./docs/useRafLoop.md) &mdash; calls given function inside the RAF loop.
  - [`useSessionStorage`](./docs/useSessionStorage.md) &mdash; manages a value in `sessionStorage`.
  - [`useThrottle` and `useThrottleFn`](./docs/useThrottle.md) &mdash; throttles a function. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/side-effects-usethrottle--demo)
  - [`useTitle`](./docs/useTitle.md) &mdash; sets title of the page.
  - [`usePermission`](./docs/usePermission.md) &mdash; query permission status for browser APIs.
    <br/>
    <br/>
- [**Lifecycles**](./docs/Lifecycles.md)
  - [`useEffectOnce`](./docs/useEffectOnce.md) &mdash; a modified [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) hook that only runs once.
  - [`useEvent`](./docs/useEvent.md) &mdash; subscribe to events.
  - [`useLifecycles`](./docs/useLifecycles.md) &mdash; calls `mount` and `unmount` callbacks.
  - [`useMountedState`](./docs/useMountedState.md) and [`useRefMounted`](./docs/useRefMounted.md) &mdash; track if component is mounted.
  - [`usePromise`](./docs/usePromise.md) &mdash; resolves promise only while component is mounted.
  - [`useLogger`](./docs/useLogger.md) &mdash; logs in console as component goes through life-cycles.
  - [`useMount`](./docs/useMount.md) &mdash; calls `mount` callbacks.
  - [`useUnmount`](./docs/useUnmount.md) &mdash; calls `unmount` callbacks.
  - [`useUpdateEffect`](./docs/useUpdateEffect.md) &mdash; run an `effect` only on updates.
  - [`useIsomorphicLayoutEffect`](./docs/useIsomorphicLayoutEffect.md) &mdash; `useLayoutEffect` that does not show warning when server-side rendering.
  - [`useDeepCompareEffect`](./docs/useDeepCompareEffect.md) &mdash; run an `effect` depending on deep comparison of its dependencies
    <br/>
    <br/>
- [**State**](./docs/State.md)
  - [`createMemo`](./docs/createMemo.md) &mdash; factory of memoized hooks.
  - [`createReducer`](./docs/createReducer.md) &mdash; factory of reducer hooks with custom middleware.
  - [`useDefault`](./docs/useDefault.md) &mdash; returns the default value when state is `null` or `undefined`.
  - [`useGetSet`](./docs/useGetSet.md) &mdash; returns state getter `get()` instead of raw state.
  - [`useGetSetState`](./docs/useGetSetState.md) &mdash; as if [`useGetSet`](./docs/useGetSet.md) and [`useSetState`](./docs/useSetState.md) had a baby.
  - [`usePrevious`](./docs/usePrevious.md) &mdash; returns the previous state or props.
  - [`useObservable`](./docs/useObservable.md) &mdash; tracks latest value of an `Observable`.
  - [`useSetState`](./docs/useSetState.md) &mdash; creates `setState` method which works like `this.setState`. [![][img-demo]](https://codesandbox.io/s/n75zqn1xp0)
  - [`useStateList`](./docs/useStateList.md) &mdash; circularly iterates over an array.
  - [`useToggle` and `useBoolean`](./docs/useToggle.md) &mdash; tracks state of a boolean.
  - [`useCounter` and `useNumber`](./docs/useCounter.md) &mdash; tracks state of a number. [![][img-demo]](https://streamich.github.io/vue-fns/?path=/story/state-usecounter--demo)
  - [`useList`](./docs/useList.md) &mdash; tracks state of an array.
  - [`useMap`](./docs/useMap.md) &mdash; tracks state of an object.
