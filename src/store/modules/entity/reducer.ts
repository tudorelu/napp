import {
  ENTITY_SET,
  ENTITY_MERGE,
  ENTITY_DELETE,
  EntityActions,
  EntitySetAction,
  EntityMergeAction,
  EntityDeleteAction,
} from './actions'

export interface EntitiesState {
  [key: string]: {
    ids: (string | number)[]
    collection: Record<string | number, any>
  }
}

export const entityInitialState = {}

export const entityReducer = (
  state: EntitiesState = entityInitialState,
  action: EntityActions,
): any => {
  switch (action.type) {
    case ENTITY_SET: {
      const {payload, meta} = action as EntitySetAction

      const collection = payload
      const ids = Object.keys(collection)

      return {
        ...state,
        [meta.domain]: {
          ids,
          collection,
        },
      }
    }
    case ENTITY_MERGE: {
      const {payload, meta} = action as EntityMergeAction

      const existingDomain = state[meta.domain] || {}
      const existingCollection = existingDomain.collection || {}

      const collection = {
        ...existingCollection,
        ...payload,
      }
      const ids = Object.keys(collection)

      return {
        ...state,
        [meta.domain]: {
          ids,
          collection,
        },
      }
    }
    case ENTITY_DELETE: {
      const {meta} = action as EntityDeleteAction

      return {
        ...state,
        [meta.domain]: {},
      }
    }
    default:
      return state
  }
}

export default entityReducer
