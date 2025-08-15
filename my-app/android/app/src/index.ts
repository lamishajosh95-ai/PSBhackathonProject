import { registerPlugin } from '@capacitor/core';

export interface SecureStorePlugin {
  getSignatureHash(): Promise<{ hash: string }>;
}

export const SecureStore = registerPlugin<SecureStorePlugin>('SecureStore');
