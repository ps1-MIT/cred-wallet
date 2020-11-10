import queryString from 'query-string';
import { ICertificateDeeplink } from './types';

//TODO: remove sum function
// created for jest first test only
export function sum(a: number, b: number): number {
  return a + b;
}

export function parseCertificateDeeplink(
  deeplinkUrl: string,
): ICertificateDeeplink {
  const parsedUrl = queryString.parseUrl(deeplinkUrl);

  return {
    challenge: parsedUrl.query.challenge,
    requestUrl: parsedUrl.query.request_url,
  };
}
