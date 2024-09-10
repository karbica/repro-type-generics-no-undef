export function useMouseCoords() {
  let x = $state(0);
  let y = $state(0);

  function onMousemove(e: MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  }

  function init() {
    window.addEventListener('mousemove', onMousemove);
    return () => window.removeEventListener('mousemove', onMousemove);
  }

  onMount(init);

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
  };
}
