import queryString from 'query-string';
import randomString from 'random-string';
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

export function generateExampleDid() {
  const EXAMPLE_DID_PREFIX = 'did:example:';
  return `${EXAMPLE_DID_PREFIX}${randomString()}`;
}

export function generateDid() {
  const DID_PREFIX = 'did:';
  return `${DID_PREFIX}${randomString()}`;
}
