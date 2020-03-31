function createLowerScale(
  base: number,
  ratio: number,
  unit: string,
  limit: number = 5,
  scale: string[] = [],
  iterations: number = 0
): string[] {
  if (iterations === limit) {
    return scale.reverse()
  }

  const scaleValue = base / ratio

  scale.push(`${scaleValue}${unit}`)

  return createLowerScale(scaleValue, ratio, unit, limit, scale, iterations + 1)
}

function createUpperScale(
  base: number,
  ratio: number,
  unit: string,
  limit: number = 5,
  scale: string[] = [],
  iterations: number = 0
): string[] {
  if (iterations === limit) {
    return scale
  }

  const scaleValue = base * ratio

  scale.push(`${scaleValue}${unit}`)

  return createUpperScale(scaleValue, ratio, unit, limit, scale, iterations + 1)
}

export default function createScale(base: number, unit: string, ratio: number) {
  return [
    ...createLowerScale(base, ratio, unit),
    `${base}${unit}`,
    ...createUpperScale(base, ratio, unit),
  ].reduce(
    (acc, value, i) => ({
      ...acc,
      [i + 1]: value,
    }),
    {}
  )
}
