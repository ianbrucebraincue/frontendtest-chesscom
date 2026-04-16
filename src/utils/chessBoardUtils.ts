import type { Column, Row, Square, Board } from '@/types/chess'
import { COLUMNS, ROWS } from '@/constants/board'

export function generateBoard(): Board {
  const cols = [...COLUMNS] as Column[]
  const rows = [...ROWS].reverse() as Row[]
  return rows.map((rank) => cols.map((file) => `${file}${rank}` as Square))
}
