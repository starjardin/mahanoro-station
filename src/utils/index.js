import { format } from 'date-fns'

export function formatDate (date, form) {
  if (date) {
    return format(date, form)
  }
  return
}