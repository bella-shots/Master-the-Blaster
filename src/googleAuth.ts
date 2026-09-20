import firebaseConfig from '../firebase-applet-config.json';

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
            error_callback?: (err: any) => void;
          }) => {
            requestAccessToken: (options?: { prompt?: string }) => void;
          };
        };
      };
    };
  }
}

const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';
const STORAGE_KEY = 'gdrive_access_token';
const EXPIRY_KEY = 'gdrive_token_expires_at';

export function getStoredToken(): string | null {
  const token = localStorage.getItem(STORAGE_KEY);
  const expiresAt = localStorage.getItem(EXPIRY_KEY);
  if (!token || !expiresAt) return null;
  if (Date.now() > parseInt(expiresAt, 10)) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EXPIRY_KEY);
    return null;
  }
  return token;
}

export function clearStoredToken(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(EXPIRY_KEY);
}

export function requestGoogleAccessToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      reject(new Error('Google Identity Services library is still loading. Please try again in a moment.'));
      return;
    }

    const clientId = firebaseConfig.oAuthClientId;
    if (!clientId) {
      reject(new Error('OAuth Client ID is not configured.'));
      return;
    }

    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPES,
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          reject(new Error(tokenResponse.error));
          return;
        }
        if (tokenResponse.access_token) {
          // Token is valid for ~3500s (~1 hr)
          const expiresAt = Date.now() + 3500 * 1000;
          localStorage.setItem(STORAGE_KEY, tokenResponse.access_token);
          localStorage.setItem(EXPIRY_KEY, expiresAt.toString());
          resolve(tokenResponse.access_token);
        } else {
          reject(new Error('No access token returned.'));
        }
      },
      error_callback: (err) => {
        reject(err);
      },
    });

    tokenClient.requestAccessToken({ prompt: 'consent' });
  });
}
