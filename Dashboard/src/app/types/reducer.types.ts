import {IUser} from './data.types'

export interface IAction {
  type: string
  payload?: any
}

export interface IState {
  appReducer: IAppState
  crudReducer: ICrudState
  operationModalReducer: IOperationModalState
}

export interface IAppState {
  user: IUser | null
  isAuthenticated: boolean
  loggedOut: boolean
}

export interface ICrudState {
  tableName: string
  isTableHasFiles: boolean
  tableData: any[]
  tableColumns: any[]
}

export interface IOperationModalState {
  id: null | number
  isModalOpen: boolean
}
