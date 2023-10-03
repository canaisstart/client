export const generateGradients = (inputColor: string): string[] => {
  const colorArray = inputColor?.match(/\d+/g)?.map(Number)

  if (colorArray) {
    const [r, g, b, a] = colorArray

    const gradient1 = `background: linear-gradient(90deg, rgba(${r}, ${g}, ${b}, ${a}) 67.19%, rgba(${
      r - 17
    }, ${g + 47}, ${b + 10}, ${a}) 100%);`
    const gradient2 = `background: linear-gradient(90deg, rgba(${r}, ${g}, ${b}, ${a}) 0%, rgba(${
      r - 24
    }, ${g + 109}, ${b + 28}, ${a}) 59.9%, rgba(${r - 17}, ${g + 47}, ${
      b + 10
    }, ${a}) 96.87%);`

    return [gradient1, gradient2]
  }

  return ['']
}
