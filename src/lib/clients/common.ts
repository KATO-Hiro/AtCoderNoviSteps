import { delay } from '$lib/utils/time';

// See:
// https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
export async function fetchAPI<T>(url: string, error_messages: string): Promise<T>;
export async function fetchAPI<T>(url: string, error_messages: string): Promise<T[]>;

export async function fetchAPI<T>(url: string, error_messages: string): Promise<T | T[]> {
  if (!url || !url.startsWith('http')) {
    throw new Error('Invalid URL is given.');
  }

  try {
    // 外部APIへの過剰なアクセスを防ぐため、1秒待機
    await delay(1000);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 seconds
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseJson = response.json();

    if (responseJson === null || responseJson === undefined) {
      throw new Error('Failed to parse the response.');
    }

    return responseJson as T | T[];
  } catch (error) {
    console.error(
      error_messages,
      error instanceof Error ? error.message : 'Unknown error occurred.',
    );
    throw error;
  }
}
