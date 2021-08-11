export const obj2options = obj => {
  const options = Object.entries(obj)
    .map(([ value, label ], index) => ({
      key: index,
      label,
      value
    }))

  return options
}
