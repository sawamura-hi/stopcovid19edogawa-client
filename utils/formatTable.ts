import dayjs from 'dayjs'

const headers = [
  { text: '公表日', value: '公表日' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '発症日', value: '発症日' },
  { text: '判明日', value: '判明日' }
]

type DataType = {
  リリース日: string
  年代: string | null
  性別: string | null
  発症日: string
  判明日: string
  [key: string]: any
}

type TableDataType = {
  公表日: string
  年代: DataType['年代']
  性別: DataType['性別']
  発症日: string
  判明日: string
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const releaseDate = dayjs(d['リリース日'])
    const occurrenceDate = dayjs(d['発症日'])
    const positiveDate = dayjs(d['判明日'])
    const TableRow: TableDataType = {
      公表日: releaseDate.isValid() ? releaseDate.format('M/D') : '不明',
      年代: d['年代'] ?? '調査中',
      性別: d['性別'] ?? '調査中',
      発症日: occurrenceDate.isValid() ? occurrenceDate.format('M/D') : '不明',
      判明日: positiveDate.isValid() ? positiveDate.format('M/D') : '不明'
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets
    .sort((a, b) => dayjs(a.公表日).unix() - dayjs(b.公表日).unix())
    .reverse()
  return tableDate
}
