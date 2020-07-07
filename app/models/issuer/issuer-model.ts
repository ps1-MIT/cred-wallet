import { types, getParent, IAnyStateTreeNode, destroy } from "mobx-state-tree"
import { CredentialModel, Credential } from "../credential/credential-model"
// const uuidv1 = require('uuid/v1')

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const IssuerModel = types
  .model({
    id: types.identifier,
    name: types.string,
    image: types.string,
    credentials: types.array(CredentialModel)
  })
  .actions(self => ({
    addCredential(cred: Credential) {
      const currentDate = new Date()
      // FOR TESTING:  SET ISSUANCE DATE TO RANDOM DATE BETWEEN 2012 AND NOW
      cred.issuanceDate = randomDate(new Date(2012, 0, 1), currentDate).toUTCString()
      cred.id = currentDate.toUTCString()
      cred.name = `Issued: ${cred.issuanceDate} \n Added: ${cred.id}`
      self.credentials.push(cred)
      // sort by date
      self.credentials = self.credentials.sort((a: Credential, b: Credential) => (new Date(b.issuanceDate)).getTime() - (new Date(a.issuanceDate)).getTime())
    },
    removeCredential(cred: Credential) {
      destroy(cred as IAnyStateTreeNode)
    },
    removeMe() {
      const parent = getParent(self, 2) as any // hack to avoid typescript error
      parent.removeIssuer(self)
    }

  }))

export interface Issuer {
    id: string
    name: string
    image: string
    credentials: Credential[]
  }
