import { GeneralFetchProblem } from "./fetch-problem"
import { Credential } from "../../models/credential/credential-model"

export type GetVCResult = {kind: "ok"; vc: Credential} | GeneralFetchProblem
