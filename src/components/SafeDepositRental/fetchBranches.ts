import { Branch } from './SafeDepositRentalContent';

const BRANCHES_URL = '/api/v1/safeboxes';

export async function fetchBranches(regionCode: string): Promise<Branch[]> {
  try {
    const response = await fetch(BRANCHES_URL + `?regionCode=${regionCode}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    return Promise.resolve(result);
  } catch (err) {
    console.error(err);

    return Promise.reject();
  }
}
