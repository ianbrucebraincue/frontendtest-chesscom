import { COLUMNS, ROWS } from '@/constants/board'

export type Row = (typeof ROWS)[number]
export type Column = (typeof COLUMNS)[number] // Give the type of any index in this array

export type Square = `${Column}${Row}`

export type Board = Square[][]
