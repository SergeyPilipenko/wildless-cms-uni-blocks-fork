import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

const SAFE_DEPOSIT_RENTAL_URL = '/api/v1/safe-deposit-rental.json';

export function useSafeDepositRental() {
  const { data } = useAsyncData(SAFE_DEPOSIT_RENTAL_URL, fetchSafeDepositRental);

  const result = data || [];

  return result;
}

async function fetchSafeDepositRental(): Promise<any | undefined> {
  try {
    const response = await fetch(SAFE_DEPOSIT_RENTAL_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
