<!--
  @component
  Attach is specifically used for testing runes (hooks). It is not used anywhere
  in application code. This is a fixture so that runes can properly be evaluated
  in tests since components call lifecycle functions, not runes.
 -->

<script lang="ts" generics="T extends AnyFunction, R extends ReturnType<T>">
  type Props = { fn: T };

  const NOOP = () => {};
  const { fn }: Props = $props();

  export const state = fn ? (fn() as R) : NOOP();
</script>
