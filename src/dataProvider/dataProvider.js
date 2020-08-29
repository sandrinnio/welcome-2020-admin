import { USER } from '../resources';
import userProvider from '../user/dataProvider'

// const dataProvider = {
//   getList:    (resource, params) => Promise,
//   getOne:     (resource, params) => Promise,
//   getMany:    (resource, params) => Promise,
//   getManyReference: (resource, params) => Promise,
//   create:     (resource, params) => Promise,
//   update:     (resource, params) => Promise,
//   updateMany: (resource, params) => Promise,
//   delete:     (resource, params) => Promise,
//   deleteMany: (resource, params) => Promise,
// }

export const dataProvider = {
  getList: (resource, params) => {
    switch (resource) {
      case USER:
        return userProvider.getList(params);
      default:
        return { data: [], total: 0 };
    }
  },
  getOne: (resource, params) => {
    switch (resource) {
      case USER:
        return userProvider.getOne(params)
      default:
        return { data: [] }
    }
  }
}
