import { Intent, makeIntent } from './base'
import {
  IntentDataCloseSession,
  IntentDataFinishValidateSession,
  IntentDataGetSession,
  IntentDataListSessions,
  IntentDataOpenSession,
  IntentDataValidateSession,
} from '../clients/intent.gen'

interface BaseArgs {
  lifespan: number
}

}

}

export type ValidateSessionArgs = BaseArgs & IntentDataValidateSession

export async function validateSession({ lifespan, ...data }: ValidateSessionArgs): Promise<Intent<IntentDataValidateSession>> {
}

export type FinishValidateSessionArgs = BaseArgs & IntentDataFinishValidateSession

export function finishValidateSession({ lifespan, ...data }: FinishValidateSessionArgs): Intent<IntentDataFinishValidateSession> {
}

export type CloseSessionArgs = BaseArgs & IntentDataCloseSession

export function closeSession({ lifespan, ...data }: CloseSessionArgs): Intent<IntentDataCloseSession> {
}

export type ListSessionsArgs = BaseArgs & IntentDataListSessions

export function listSessions({ lifespan, ...data }: ListSessionsArgs): Intent<IntentDataListSessions> {
}

export type GetSessionArgs = BaseArgs & IntentDataGetSession

export function getSession({ lifespan, ...data }: GetSessionArgs): Intent<IntentDataGetSession> {
}

export type SessionAuthProof = BaseArgs & IntentDataSessionAuthProof

export function sessionAuthProof({ lifespan, ...data }: SessionAuthProof): Intent<IntentDataSessionAuthProof> {
}
