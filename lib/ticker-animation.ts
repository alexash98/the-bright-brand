/** Build a unique CSS keyframe name + rule with concrete px values (no CSS vars). */
export function buildTickerKeyframes(
  id: string,
  axis: "x" | "y",
  distancePx: number,
  direction: "forward" | "reverse" = "forward",
): { name: string; css: string } {
  const name = `ticker-${axis}-${direction}-${id}-${Math.round(distancePx)}`;
  const dist = Math.abs(distancePx);

  if (axis === "x") {
    const from = direction === "forward" ? "0" : `-${dist}px`;
    const to = direction === "forward" ? `-${dist}px` : "0";
    return {
      name,
      css: `@keyframes ${name}{from{transform:translate3d(${from},0,0)}to{transform:translate3d(${to},0,0)}}`,
    };
  }

  // y: forward = scroll up (content moves up / negative Y)
  if (direction === "forward") {
    return {
      name,
      css: `@keyframes ${name}{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,-${dist}px,0)}}`,
    };
  }

  // reverse = scroll down (content starts offset and moves toward 0)
  return {
    name,
    css: `@keyframes ${name}{from{transform:translate3d(0,-${dist}px,0)}to{transform:translate3d(0,0,0)}}`,
  };
}
