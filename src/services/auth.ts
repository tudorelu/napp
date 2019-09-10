import * as LocalAuthentication from 'expo-local-authentication'

export type AuthResponse = {
  success: boolean
  error?: Error
}

export interface AuthServiceI {
  auth(): Promise<AuthResponse>
}

export class BiometricAuthService implements AuthServiceI {
  async auth(): Promise<AuthResponse> {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authentication required',
      fallbackLabel: '',
    })

    return {
      success: result.success,
      error: result.success ? undefined : new Error(result.error),
    }
  }
}

export default new BiometricAuthService()
