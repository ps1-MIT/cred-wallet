import { types, getParent } from "mobx-state-tree"

export const CredentialModel = types
  .model({
    id: types.identifier,
    name: types.string,
    issuanceDate: types.string,
    issuer: types.model({ name: types.string, image: types.string, id: types.string }),
    image: types.string,
    vc: types.string
  })
  .actions(self => ({
    removeMe() {
      const parent = getParent(self, 2) as any // hack to avoid typescript error
      parent.removeCredential(self)
    }
  }))

// export type Credential = Instance<typeof CredentialModel>;

export interface Credential {
    id: string
    name: string
    issuanceDate: string
    issuer: {name: string, image: string, id: string},
    image: string
    vc: string
  }
