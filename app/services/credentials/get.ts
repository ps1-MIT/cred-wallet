import parse from "../../utils/parse"
import { getGeneralFetchProblem } from "./fetch-problem"
import { GetVCResult } from "./get.types"

// import { sampleVC } from './sampleVC';

/**
   * Gets a single vc by ID
   */

export async function getVC(url: string): Promise<GetVCResult> {
  // make the api call
  // at the moment it just goes to https://api.myjson.com/bins
  // NOte:  this url is defined in .env
  // let temporaryIdentifierAtMyJSON = "ptfg4"
  // NOTE:  THIS IS WHAT WE MIGHT USE IF THE CREDS WERE POSTED AT A SINGLE SHARED SPACE
  // ALTHOUGH IT STILL IS PROBABLY NOT A GOOD IDEA TO HARDCODE THE URL INTO THE APP - BETTER
  // IDEA TO JUST PASS THE FULL URL EVERY TIME.
  // const response: ApiResponse<any> = await this.apisauce.get(`/${temporaryIdentifierAtMyJSON}`)
  const response: Response = await fetch(url)

  // the typical ways to die when calling an api
  if (!response.ok) {
    const problem = getGeneralFetchProblem(response)
    if (problem) return problem
  }

  const credential = await response.json()

  console.tron.log("get.ts: the extracted jsony:")
  console.tron.log(credential)
  // transform the data into Credential objects
  try {
    /* For testing:
       const newCred = JSON.stringify({...sampleVC, id});
      const resultCred: Credential = {
        id,
        issuer: sampleVC.issuer.name,
        issuanceDate: sampleVC.issuanceDate,
        name: sampleVC.credentialSubject.degree.name,
        image: sampleVC.credentialSubject.degree.image,
        vc: newCred
      } */

    const resultCred = parse(credential)
    return { kind: "ok", vc: resultCred }
    // return Promise.resolve({ kind: "ok", vc: resultCred })
  } catch {
    return { kind: "bad-data" }
  }
}
