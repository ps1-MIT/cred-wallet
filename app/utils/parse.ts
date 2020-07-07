import { Credential } from "../models/credential/credential-model"

export default function parse(cred): Credential {
  const resultCred: Credential = {
    id: cred.id,
    issuer: { name: cred.issuer.name, image: cred.issuer.image, id: cred.issuer.id },
    issuanceDate: cred.issuanceDate,
    name: cred.credentialSubject.degree.name,
    image: cred.credentialSubject.degree.image,
    vc: JSON.stringify(cred),
  }
  return resultCred
}
