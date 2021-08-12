import strings from "../lang/Lang";

export type ApiMethod = "GET" | "POST" | "PUT" | "DELETE"

export interface commonFetchInnerInterface {
  method?: ApiMethod
  body?: BodyInit | null
}

export function getApiHeaders() {
  return {
    "Accept": 'application/json',
    "Content-Type": 'application/json',
    'X-App-Locale': strings.getLanguage() || 'en',
  };
}

export const commonFetch = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: getApiHeaders(),
      credentials: 'include',
    });

    const data = await response.json();

    if (response.status !== 200 || data.status !== '1') {

      const error = new Error(data.message || 'server error, contact server.');
      error.status = response.status;
      throw error;
    }

    return data;
  } catch (error) {
    if (!navigator.onLine) {
      return;
    }
    throw error;
  }
};

export const commonFetchManual = async (url: string, { method, body }: commonFetchInnerInterface) => {
  try {
    const response = await fetch(url, {
      headers: getApiHeaders(),
      credentials: 'include',
      method: method ?? 'GET',
      body: body
    });

    const data = await response.json();

    if (response.status !== 200 || data.status !== '1') {

      const error = new Error(data.message || 'server error, contact server.');
      error.status = response.status;
      throw error;
    }

    return data;
  } catch (error) {
    if (!navigator.onLine) {
      return;
    }
    throw error;
  }

};
