import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import UserRegister from '@/store/users/register'
import Auth from '@/store/auth'
import User from '~/store/users'
import ShopProducts from '@/store/shop/products'

/* eslint-disable import/no-mutable-exports */

let userRegister: UserRegister
let auth: Auth
let users: User
let shopProducts: ShopProducts

const initializeStores = (store: Store<any>): void => {
  userRegister = getModule(UserRegister, store)
  auth = getModule(Auth, store)
  users = getModule(User, store)
  shopProducts = getModule(ShopProducts, store)
}

export { initializeStores, userRegister, auth, users, shopProducts }