const namespace = 'entity'

export const getEntities = (state: any, domain: string): any => {
  return (state[namespace][domain] && state[namespace][domain].collection) || {}
}

export const getEntityIds = (state: any, domain: string): any => {
  return (state[namespace][domain] && state[namespace][domain].ids) || []
}

export const getEntity = (
  state: any,
  domain: string,
  id: number | string,
): any => {
  return state[namespace][domain] && state[namespace][domain].collection[id]
}

export const filterEntities = (
  state: any,
  domain: string,
  filters?: any,
): any => {
  const ids: (string | number)[] = getEntityIds(state, domain)
  const entities = ids.map((id: any) => getEntity(state, domain, id))

  if (!filters) return entities

  return entities.filter((entity: any) => {
    return Object.keys(filters).reduce((ok: boolean, filter: any) => {
      return ok && entity[filter] === filters[filter]
    }, true)
  })
}
