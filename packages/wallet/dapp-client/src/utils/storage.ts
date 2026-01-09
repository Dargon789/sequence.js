<<<<<<< Updated upstream
import { Address, Hex } from 'ox'
import { jsonReplacers, jsonRevivers } from './index.js'
import {
=======
import { Attestation } from '@0xsequence/wallet-primitives'
import { Address, Hex } from 'ox'
import { jsonReplacers, jsonRevivers } from './index.js'
import {
  AddExplicitSessionPayload,
  CreateNewSessionPayload,
  ModifySessionPayload,
>>>>>>> Stashed changes
  LoginMethod,
  SignMessagePayload,
  SignTypedDataPayload,
  GuardConfig,
  SendWalletTransactionPayload,
<<<<<<< Updated upstream
  ModifyExplicitSessionPayload,
  CreateNewSessionPayload,
  AddExplicitSessionPayload,
} from '../types/index.js'

import { Attestation } from '../index.js'

const isBrowser = typeof window !== 'undefined'
const hasSessionStorage = isBrowser && typeof sessionStorage !== 'undefined'
const hasIndexedDb = typeof indexedDB !== 'undefined'

=======
} from '../types/index.js'

>>>>>>> Stashed changes
export interface ExplicitSessionData {
  pk: Hex.Hex
  walletAddress: Address.Address
  chainId: number
  loginMethod?: LoginMethod
  userEmail?: string
  guard?: GuardConfig
}

export interface ImplicitSessionData {
  pk: Hex.Hex
  walletAddress: Address.Address
  attestation: Attestation.Attestation
  identitySignature: Hex.Hex
  chainId: number
  loginMethod?: LoginMethod
  userEmail?: string
  guard?: GuardConfig
}

<<<<<<< Updated upstream
export interface SessionlessConnectionData {
  walletAddress: Address.Address
  loginMethod?: LoginMethod
  userEmail?: string
  guard?: GuardConfig
}

export type PendingPayload =
  | CreateNewSessionPayload
  | AddExplicitSessionPayload
  | ModifyExplicitSessionPayload
=======
export type PendingPayload =
  | CreateNewSessionPayload
  | AddExplicitSessionPayload
  | ModifySessionPayload
>>>>>>> Stashed changes
  | SignMessagePayload
  | SignTypedDataPayload
  | SendWalletTransactionPayload

export interface PendingRequestContext {
  chainId: number
  action: string
  payload: PendingPayload
}

export interface SequenceStorage {
  setPendingRedirectRequest(isPending: boolean): Promise<void>
  isRedirectRequestPending(): Promise<boolean>

  saveTempSessionPk(pk: Hex.Hex): Promise<void>
  getAndClearTempSessionPk(): Promise<Hex.Hex | null>

  savePendingRequest(context: PendingRequestContext): Promise<void>
  getAndClearPendingRequest(): Promise<PendingRequestContext | null>
  peekPendingRequest(): Promise<PendingRequestContext | null>

  saveExplicitSession(sessionData: ExplicitSessionData): Promise<void>
  getExplicitSessions(): Promise<ExplicitSessionData[]>
  clearExplicitSessions(): Promise<void>

  saveImplicitSession(sessionData: ImplicitSessionData): Promise<void>
  getImplicitSession(): Promise<ImplicitSessionData | null>
  clearImplicitSession(): Promise<void>

<<<<<<< Updated upstream
  saveSessionlessConnection(sessionData: SessionlessConnectionData): Promise<void>
  getSessionlessConnection(): Promise<SessionlessConnectionData | null>
  clearSessionlessConnection(): Promise<void>

  saveSessionlessConnectionSnapshot?(sessionData: SessionlessConnectionData): Promise<void>
  getSessionlessConnectionSnapshot?(): Promise<SessionlessConnectionData | null>
  clearSessionlessConnectionSnapshot?(): Promise<void>

=======
>>>>>>> Stashed changes
  clearAllData(): Promise<void>
}

const DB_NAME = 'SequenceDappStorage'
const DB_VERSION = 1
const STORE_NAME = 'userKeys'
const IMPLICIT_SESSIONS_IDB_KEY = 'SequenceImplicitSession'
const EXPLICIT_SESSIONS_IDB_KEY = 'SequenceExplicitSession'
<<<<<<< Updated upstream
const SESSIONLESS_CONNECTION_IDB_KEY = 'SequenceSessionlessConnection'
const SESSIONLESS_CONNECTION_SNAPSHOT_IDB_KEY = 'SequenceSessionlessConnectionSnapshot'
=======
>>>>>>> Stashed changes

const PENDING_REDIRECT_REQUEST_KEY = 'SequencePendingRedirect'
const TEMP_SESSION_PK_KEY = 'SequencePendingTempSessionPk'
const PENDING_REQUEST_CONTEXT_KEY = 'SequencePendingRequestContext'

export class WebStorage implements SequenceStorage {
<<<<<<< Updated upstream
  private inMemoryDb = new Map<IDBValidKey, unknown>()

  private openDB(): Promise<IDBDatabase> {
    if (!hasIndexedDb) {
      return Promise.reject(new Error('IndexedDB is not available in this environment.'))
    }
=======
  private openDB(): Promise<IDBDatabase> {
>>>>>>> Stashed changes
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION)
      request.onerror = (event) => reject(`IndexedDB error: ${(event.target as IDBRequest).error}`)
      request.onsuccess = (event) => resolve((event.target as IDBRequest).result as IDBDatabase)
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBRequest).result as IDBDatabase
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME)
        }
      }
    })
  }

  private async getIDBItem<T>(key: IDBValidKey): Promise<T | undefined> {
<<<<<<< Updated upstream
    if (!hasIndexedDb) {
      return this.inMemoryDb.get(key) as T | undefined
    }
=======
>>>>>>> Stashed changes
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(key)
      request.onerror = (event) => reject(`Failed to retrieve item: ${(event.target as IDBRequest).error}`)
      request.onsuccess = (event) => resolve((event.target as IDBRequest).result as T | undefined)
    })
  }

  private async setIDBItem(key: IDBValidKey, value: unknown): Promise<void> {
<<<<<<< Updated upstream
    if (!hasIndexedDb) {
      this.inMemoryDb.set(key, value)
      return
    }
=======
>>>>>>> Stashed changes
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const request = db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).put(value, key)
      request.onerror = (event) => reject(`Failed to save item: ${(event.target as IDBRequest).error}`)
      request.onsuccess = () => resolve()
    })
  }

  private async deleteIDBItem(key: IDBValidKey): Promise<void> {
<<<<<<< Updated upstream
    if (!hasIndexedDb) {
      this.inMemoryDb.delete(key)
      return
    }
=======
>>>>>>> Stashed changes
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const request = db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).delete(key)
      request.onerror = (event) => reject(`Failed to delete item: ${(event.target as IDBRequest).error}`)
      request.onsuccess = () => resolve()
    })
  }

  async setPendingRedirectRequest(isPending: boolean): Promise<void> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return
      if (isPending) sessionStorage.setItem(PENDING_REDIRECT_REQUEST_KEY, 'true')
      else sessionStorage.removeItem(PENDING_REDIRECT_REQUEST_KEY)
=======
      if (isPending) {
        sessionStorage.setItem(PENDING_REDIRECT_REQUEST_KEY, 'true')
      } else {
        sessionStorage.removeItem(PENDING_REDIRECT_REQUEST_KEY)
      }
>>>>>>> Stashed changes
    } catch (error) {
      console.error('Failed to set pending redirect flag:', error)
    }
  }

  async isRedirectRequestPending(): Promise<boolean> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return false
=======
>>>>>>> Stashed changes
      return sessionStorage.getItem(PENDING_REDIRECT_REQUEST_KEY) === 'true'
    } catch (error) {
      console.error('Failed to check pending redirect flag:', error)
      return false
    }
  }

  async saveTempSessionPk(pk: Hex.Hex): Promise<void> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return
=======
>>>>>>> Stashed changes
      sessionStorage.setItem(TEMP_SESSION_PK_KEY, pk)
    } catch (error) {
      console.error('Failed to save temp session PK:', error)
    }
  }

  async getAndClearTempSessionPk(): Promise<Hex.Hex | null> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return null
=======
>>>>>>> Stashed changes
      const pk = sessionStorage.getItem(TEMP_SESSION_PK_KEY)
      sessionStorage.removeItem(TEMP_SESSION_PK_KEY)
      return pk as Hex.Hex | null
    } catch (error) {
      console.error('Failed to retrieve temp session PK:', error)
      return null
    }
  }

  async savePendingRequest(context: PendingRequestContext): Promise<void> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return
=======
>>>>>>> Stashed changes
      sessionStorage.setItem(PENDING_REQUEST_CONTEXT_KEY, JSON.stringify(context, jsonReplacers))
    } catch (error) {
      console.error('Failed to save pending request context:', error)
    }
  }

  async getAndClearPendingRequest(): Promise<PendingRequestContext | null> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return null
=======
>>>>>>> Stashed changes
      const context = sessionStorage.getItem(PENDING_REQUEST_CONTEXT_KEY)
      if (!context) return null
      sessionStorage.removeItem(PENDING_REQUEST_CONTEXT_KEY)
      return JSON.parse(context, jsonRevivers)
    } catch (error) {
      console.error('Failed to retrieve pending request context:', error)
      return null
    }
  }

  async peekPendingRequest(): Promise<PendingRequestContext | null> {
    try {
<<<<<<< Updated upstream
      if (!hasSessionStorage) return null
=======
>>>>>>> Stashed changes
      const context = sessionStorage.getItem(PENDING_REQUEST_CONTEXT_KEY)
      if (!context) return null
      return JSON.parse(context, jsonRevivers)
    } catch (error) {
      console.error('Failed to peek at pending request context:', error)
      return null
    }
  }

  async saveExplicitSession(sessionData: ExplicitSessionData): Promise<void> {
    try {
      const existingSessions = (await this.getExplicitSessions()).filter(
        (s) =>
          !(
            Address.isEqual(s.walletAddress, sessionData.walletAddress) &&
            s.pk === sessionData.pk &&
            s.chainId === sessionData.chainId
          ),
      )
      await this.setIDBItem(EXPLICIT_SESSIONS_IDB_KEY, [...existingSessions, sessionData])
    } catch (error) {
      console.error('Failed to save explicit session:', error)
      throw error
    }
  }

  async getExplicitSessions(): Promise<ExplicitSessionData[]> {
    try {
      const sessions = await this.getIDBItem<ExplicitSessionData[]>(EXPLICIT_SESSIONS_IDB_KEY)
      return sessions && Array.isArray(sessions) ? sessions : []
    } catch (error) {
      console.error('Failed to retrieve explicit sessions:', error)
      return []
    }
  }

  async clearExplicitSessions(): Promise<void> {
    try {
      await this.deleteIDBItem(EXPLICIT_SESSIONS_IDB_KEY)
    } catch (error) {
      console.error('Failed to clear explicit sessions:', error)
      throw error
    }
  }

  async saveImplicitSession(sessionData: ImplicitSessionData): Promise<void> {
    try {
      await this.setIDBItem(IMPLICIT_SESSIONS_IDB_KEY, sessionData)
    } catch (error) {
      console.error('Failed to save implicit session:', error)
      throw error
    }
  }

  async getImplicitSession(): Promise<ImplicitSessionData | null> {
    try {
      return (await this.getIDBItem<ImplicitSessionData>(IMPLICIT_SESSIONS_IDB_KEY)) ?? null
    } catch (error) {
      console.error('Failed to retrieve implicit session:', error)
      return null
    }
  }

  async clearImplicitSession(): Promise<void> {
    try {
      await this.deleteIDBItem(IMPLICIT_SESSIONS_IDB_KEY)
    } catch (error) {
      console.error('Failed to clear implicit session:', error)
      throw error
    }
  }

<<<<<<< Updated upstream
  async saveSessionlessConnection(sessionData: SessionlessConnectionData): Promise<void> {
    try {
      await this.setIDBItem(SESSIONLESS_CONNECTION_IDB_KEY, sessionData)
    } catch (error) {
      console.error('Failed to save sessionless connection:', error)
      throw error
    }
  }

  async getSessionlessConnection(): Promise<SessionlessConnectionData | null> {
    try {
      return (await this.getIDBItem<SessionlessConnectionData>(SESSIONLESS_CONNECTION_IDB_KEY)) ?? null
    } catch (error) {
      console.error('Failed to retrieve sessionless connection:', error)
      return null
    }
  }

  async clearSessionlessConnection(): Promise<void> {
    try {
      await this.deleteIDBItem(SESSIONLESS_CONNECTION_IDB_KEY)
    } catch (error) {
      console.error('Failed to clear sessionless connection:', error)
      throw error
    }
  }

  async saveSessionlessConnectionSnapshot(sessionData: SessionlessConnectionData): Promise<void> {
    try {
      await this.setIDBItem(SESSIONLESS_CONNECTION_SNAPSHOT_IDB_KEY, sessionData)
    } catch (error) {
      console.error('Failed to save sessionless connection snapshot:', error)
      throw error
    }
  }

  async getSessionlessConnectionSnapshot(): Promise<SessionlessConnectionData | null> {
    try {
      return (await this.getIDBItem<SessionlessConnectionData>(SESSIONLESS_CONNECTION_SNAPSHOT_IDB_KEY)) ?? null
    } catch (error) {
      console.error('Failed to retrieve sessionless connection snapshot:', error)
      return null
    }
  }

  async clearSessionlessConnectionSnapshot(): Promise<void> {
    try {
      await this.deleteIDBItem(SESSIONLESS_CONNECTION_SNAPSHOT_IDB_KEY)
    } catch (error) {
      console.error('Failed to clear sessionless connection snapshot:', error)
      throw error
    }
  }

  async clearAllData(): Promise<void> {
    try {
      // Clear all session storage items
      if (hasSessionStorage) {
        sessionStorage.removeItem(PENDING_REDIRECT_REQUEST_KEY)
        sessionStorage.removeItem(TEMP_SESSION_PK_KEY)
        sessionStorage.removeItem(PENDING_REQUEST_CONTEXT_KEY)
      }
=======
  async clearAllData(): Promise<void> {
    try {
      // Clear all session storage items
      sessionStorage.removeItem(PENDING_REDIRECT_REQUEST_KEY)
      sessionStorage.removeItem(TEMP_SESSION_PK_KEY)
      sessionStorage.removeItem(PENDING_REQUEST_CONTEXT_KEY)
>>>>>>> Stashed changes

      // Clear all IndexedDB items
      await this.clearExplicitSessions()
      await this.clearImplicitSession()
<<<<<<< Updated upstream
      await this.clearSessionlessConnection()
      await this.clearSessionlessConnectionSnapshot()
=======
>>>>>>> Stashed changes
    } catch (error) {
      console.error('Failed to clear all data:', error)
      throw error
    }
  }
}
