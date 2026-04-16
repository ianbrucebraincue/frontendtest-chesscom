import { COLUMNS, ROWS } from '@/constants/board'

export function generateBoard() {
  const cols = [...COLUMNS]
  const rows = [...ROWS].reverse()
  return rows.map((rank) => cols.map((file) => `${file}${rank}`))
}
