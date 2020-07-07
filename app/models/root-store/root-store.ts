import { Instance, SnapshotOut, types, destroy, IAnyStateTreeNode } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"
import { CredentialModel, Credential } from "../credential/credential-model"
import { IssuerModel, Issuer } from "../issuer/issuer-model"
import { values } from "mobx"

export const ImportCredentialModel = types
  .model({
    url: types.string
  })
  .actions(self => ({
    setImportURL(newURL) {
      self.url = newURL
    }
  }))

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore")
  .props({
    navigationStore: types.optional(NavigationStoreModel, {}),
    issuers: types.array(IssuerModel),
    credential: types.maybe(types.safeReference(types.late(() => CredentialModel))),
    importStore: types.optional(ImportCredentialModel, { url: '' })
  })
  .views(self => ({
    findIssuerById(id: string) {
      return self.issuers.find(issuer => issuer.id === id)
    },
    sectionListData() {
      return self.issuers.map(issuer => ({ title: issuer.name, data: issuer.credentials.slice() }))
    }

  }))
  .actions(self => ({
    addCredential(cred: Credential) {
      let matchingIssuer: Issuer = self.findIssuerById(cred.issuer.id)
      if (!matchingIssuer) {
        const newIssuer = { name: cred.issuer.name, id: cred.issuer.id, image: cred.issuer.image, credentials: [] }
        self.issuers.push(newIssuer)
        matchingIssuer = self.findIssuerById(cred.issuer.id) // not sure this is necessary but seems best to retrieve it through a mobx-state-tree view
      }
      console.tron.log("addCredential: tthe matching issuer:")
      console.tron.log(matchingIssuer);
      (matchingIssuer as IAnyStateTreeNode).addCredential(cred)
    },
    setCredential(cred) {
      self.credential = cred
    },
    removeIssuer(issuer: Issuer) {
      destroy(issuer as IAnyStateTreeNode)
    },

  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
