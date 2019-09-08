import {createSelector} from 'reselect'

const namespace = 'entity'

export const getEntities = (
  state: any,
  domain: string,
): Record<string | number, any> => {
  return (state[namespace][domain] && state[namespace][domain].collection) || {}
}

export const getEntityIds = (
  state: any,
  domain: string,
): (string | number)[] => {
  return (state[namespace][domain] && state[namespace][domain].ids) || []
}

export const getEntity = (
  state: any,
  domain: string,
  id: number | string,
): any => {
  return state[namespace][domain] && state[namespace][domain].collection[id]
}

export const filterEntities = (filters?: any) =>
  createSelector(
    [getEntities],
    (entities): Record<string | number, any> => {
      if (!filters) return entities

      return entities.filter((entity: any) => {
        return Object.keys(filters).reduce((curr: boolean, filter: any) => {
          return curr && entity[filter] === filters[filter]
        }, true)
      })
    },
  )
