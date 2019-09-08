export const ENTITY_SET = 'ENTITY_SET'
export const ENTITY_MERGE = 'ENTITY_MERGE'
export const ENTITY_DELETE = 'ENTITY_DELETE'

export type EntitySetPayload = Record<string | number, any>
export function setEntity(domain: string, payload: EntitySetPayload) {
  return {
    type: ENTITY_SET,
    payload,
    meta: {
      domain,
    },
  }
}
export type EntitySetAction = ReturnType<typeof setEntity>

export function mergeEntity(domain: string, payload: EntitySetPayload) {
  return {
    type: ENTITY_MERGE,
    payload,
    meta: {
      domain,
    },
  }
}
export type EntityMergeAction = ReturnType<typeof mergeEntity>

export function deleteEntity(domain: string) {
  return {
    type: ENTITY_DELETE,
    meta: {
      domain,
    },
  }
}
export type EntityDeleteAction = ReturnType<typeof deleteEntity>

export type EntityActions =
  | EntitySetAction
  | EntityMergeAction
  | EntityDeleteAction
