import { ChangeEvent, FormEvent } from 'react'

export interface Props {
  readonly id: number
}

export type HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => void
export type HandleOnSubmit = (e: FormEvent<HTMLFormElement>) => void
