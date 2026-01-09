/* eslint-disable @typescript-eslint/no-explicit-any */
<<<<<<< Updated upstream
import { Relayer } from '@0xsequence/relayer'
import { ExplicitSession } from '@0xsequence/wallet-core'
import { Attestation, Payload } from '@0xsequence/wallet-primitives'
=======
import { Attestation, Payload } from '@0xsequence/wallet-primitives'
import { Signers } from '@0xsequence/wallet-core'
>>>>>>> Stashed changes
import { Address, Hex } from 'ox'
import type { TypedData } from 'ox/TypedData'

// --- Public Interfaces and Constants ---

<<<<<<< Updated upstream
export type FeeToken = Relayer.FeeToken
export type FeeOption = Relayer.FeeOption
export type OperationFailedStatus = Relayer.OperationFailedStatus
export type OperationStatus = Relayer.OperationStatus

=======
>>>>>>> Stashed changes
export const RequestActionType = {
  CREATE_NEW_SESSION: 'createNewSession',
  ADD_EXPLICIT_SESSION: 'addExplicitSession',
  MODIFY_EXPLICIT_SESSION: 'modifyExplicitSession',
  SIGN_MESSAGE: 'signMessage',
  SIGN_TYPED_DATA: 'signTypedData',
  SEND_WALLET_TRANSACTION: 'sendWalletTransaction',
} as const

export type LoginMethod = 'google' | 'apple' | 'email' | 'passkey' | 'mnemonic'

export interface GuardConfig {
  url: string
  moduleAddresses: Map<Address.Address, Address.Address>
}

// --- Payloads for Transport ---

export interface CreateNewSessionPayload {
<<<<<<< Updated upstream
  origin?: string
  session?: ExplicitSession
=======
  sessionAddress: Address.Address
  origin: string
  permissions?: Signers.Session.ExplicitParams
>>>>>>> Stashed changes
  includeImplicitSession?: boolean
  preferredLoginMethod?: LoginMethod
  email?: string
}

export interface AddExplicitSessionPayload {
<<<<<<< Updated upstream
  session: ExplicitSession
=======
  sessionAddress: Address.Address
  permissions: Signers.Session.ExplicitParams
>>>>>>> Stashed changes
  preferredLoginMethod?: LoginMethod
  email?: string
}

<<<<<<< Updated upstream
export interface ModifyExplicitSessionPayload {
  walletAddress: Address.Address
  session: ExplicitSession
=======
export interface ModifySessionPayload {
  walletAddress: Address.Address
  sessionAddress: Address.Address
  permissions: Signers.Session.ExplicitParams
>>>>>>> Stashed changes
}

export interface SignMessagePayload {
  address: Address.Address
  message: string
  chainId: number
}

export interface SignTypedDataPayload {
  address: Address.Address
  typedData: TypedData
  chainId: number
}

<<<<<<< Updated upstream
export interface SendWalletTransactionPayload {
  address: Address.Address
  transactionRequest: TransactionRequest
  chainId: number
}

=======
>>>>>>> Stashed changes
export type TransactionRequest = {
  to: Address.Address
  value?: bigint
  data?: Hex.Hex
  gasLimit?: bigint
}

<<<<<<< Updated upstream
export interface CreateNewSessionResponse {
=======
export interface SendWalletTransactionPayload {
  address: Address.Address
  transactionRequest: TransactionRequest
  chainId: number
}

export interface ConnectSuccessResponsePayload {
>>>>>>> Stashed changes
  walletAddress: string
  attestation?: Attestation.Attestation
  signature?: Hex.Hex
  userEmail?: string
  loginMethod?: LoginMethod
  guard?: GuardConfig
}

<<<<<<< Updated upstream
export interface SignatureResponse {
=======
export interface AddExplicitSessionSuccessResponsePayload {
  walletAddress: string
  sessionAddress: string
}

export interface ModifySessionSuccessResponsePayload {
  walletAddress: string
  sessionAddress: string
}

export interface SignatureSuccessResponse {
>>>>>>> Stashed changes
  signature: Hex.Hex
  walletAddress: string
}

<<<<<<< Updated upstream
export interface SendWalletTransactionResponse {
=======
export interface SendWalletTransactionSuccessResponse {
>>>>>>> Stashed changes
  transactionHash: Hex.Hex
  walletAddress: string
}

<<<<<<< Updated upstream
export type WalletActionResponse = SignatureResponse | SendWalletTransactionResponse

export interface SessionResponse {
  walletAddress: string
  sessionAddress: string
}
=======
export type WalletActionResponse = SignatureSuccessResponse | SendWalletTransactionSuccessResponse
>>>>>>> Stashed changes

// --- Dapp-facing Types ---

export type RandomPrivateKeyFn = () => Hex.Hex | Promise<Hex.Hex>

type RequiredKeys = 'to' | 'data' | 'value'

export type Transaction =
  // Required properties from Payload.Call
  Pick<Payload.Call, RequiredKeys> &
    // All other properties from Payload.Call, but optional
    Partial<Omit<Payload.Call, RequiredKeys>>

<<<<<<< Updated upstream
// --- Event Types ---

export type ExplicitSessionEventListener = (data: {
  action: (typeof RequestActionType)['ADD_EXPLICIT_SESSION' | 'MODIFY_EXPLICIT_SESSION']
  response?: SessionResponse
=======
export type Session = {
  address: Address.Address
  isImplicit: boolean
  permissions?: Signers.Session.ExplicitParams
  chainId?: number
}

// --- Event Types ---

export type ChainSessionManagerEvent = 'sessionsUpdated' | 'explicitSessionResponse'

export type ExplicitSessionEventListener = (data: {
  action: (typeof RequestActionType)['ADD_EXPLICIT_SESSION' | 'MODIFY_EXPLICIT_SESSION']
  response?: AddExplicitSessionSuccessResponsePayload | ModifySessionSuccessResponsePayload
>>>>>>> Stashed changes
  error?: any
}) => void

// A generic listener for events from the DappClient
export type DappClientEventListener = (data?: any) => void

export type DappClientWalletActionEventListener = (data: {
  action: (typeof RequestActionType)['SIGN_MESSAGE' | 'SIGN_TYPED_DATA' | 'SEND_WALLET_TRANSACTION']
  response?: WalletActionResponse
  error?: any
  chainId: number
}) => void

export type DappClientExplicitSessionEventListener = (data: {
  action: (typeof RequestActionType)['ADD_EXPLICIT_SESSION' | 'MODIFY_EXPLICIT_SESSION']
<<<<<<< Updated upstream
  response?: SessionResponse
=======
  response?: AddExplicitSessionSuccessResponsePayload | ModifySessionSuccessResponsePayload
>>>>>>> Stashed changes
  error?: any
  chainId: number
}) => void

// --- DappTransport Types ---

export interface SequenceSessionStorage {
  getItem(key: string): string | null | Promise<string | null>
  setItem(key: string, value: string): void | Promise<void>
  removeItem(key: string): void | Promise<void>
}

export enum MessageType {
  WALLET_OPENED = 'WALLET_OPENED',
  INIT = 'INIT',
  REQUEST = 'REQUEST',
  RESPONSE = 'RESPONSE',
}

export enum TransportMode {
  POPUP = 'popup',
  REDIRECT = 'redirect',
}

export interface PopupModeOptions {
  requestTimeoutMs?: number
  handshakeTimeoutMs?: number
}

export interface TransportMessage<T = any> {
  id: string
  type: MessageType
  sessionId?: string
  action?: string
  payload?: T
  error?: any
}

<<<<<<< Updated upstream
=======
export interface BaseRequest {
  type: string
}

export interface MessageSignatureRequest extends BaseRequest {
  type: 'message_signature'
  message: string
  address: Address.Address
  chainId: number
}

export interface TypedDataSignatureRequest extends BaseRequest {
  type: 'typed_data_signature'
  typedData: unknown
  address: Address.Address
  chainId: number
}

>>>>>>> Stashed changes
export const WalletSize = {
  width: 380,
  height: 600,
}

export interface PendingRequest {
  resolve: (payload: any) => void
  reject: (error: any) => void
  timer: number
  action: string
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export interface SendRequestOptions {
  timeout?: number
  path?: string
}
<<<<<<< Updated upstream

export type GetFeeTokensResponse = {
  isFeeRequired: boolean
  tokens?: FeeToken[]
  paymentAddress?: Address.Address
}
=======
>>>>>>> Stashed changes
