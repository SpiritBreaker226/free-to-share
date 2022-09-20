import { createRealmContext } from '@realm/react'

import { Car } from '../models'

const config = {
  schema: [Car],
}
export default createRealmContext(config)
