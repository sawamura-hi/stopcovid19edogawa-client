export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

// const surfaceStyleA: SurfaceStyle = {
//   strokeColor: '#5a8055',
//   fillColor: '#1b4d30'
// }

// const surfaceStyleB: SurfaceStyle = {
//   strokeColor: '#5a8055',
//   fillColor: '#00a040'
// }

// const surfaceStyleC: SurfaceStyle = {
//   strokeColor: '#5a8055',
//   fillColor: '#c5e2c6'
// }




const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#1B294D',
  fillColor: '#1B294D'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#005AA0',
  fillColor: '#005AA0'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#C8D2E3',
  fillColor: '#C8D2E3'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
