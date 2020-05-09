export type GraphDataType = {
  label: string
  transition: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: object) => {
  const graphData: GraphDataType[] = []
  Object.entries(data).forEach(function ([key, value]) {
    graphData.push({
      label: `${key}`,
      transition: value
      })
  });
  return graphData
}
