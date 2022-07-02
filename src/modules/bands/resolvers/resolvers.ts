import { bands } from '../schemas/data'
import { } from 'apollo-server'

export const resBand = {
  Query: {
    bands: () => bands
  }
}
