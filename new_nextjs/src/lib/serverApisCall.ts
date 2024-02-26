import { BASE_URL } from '@/lib/request';

export function fetchData(url: string) {
  return fetch(`${BASE_URL}/${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}
