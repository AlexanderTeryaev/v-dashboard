import { alert } from './alert.module'
import { account } from './account.module'
import { users } from './users.module'

import { createStore } from 'vuex'

const store = createStore({
  modules: {
    alert,
    account,
    users
  }
})

export default store
