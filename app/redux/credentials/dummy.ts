import randomString from 'random-string';

import { Credential } from '../../services/api/api.types';

export const getCredentialDummyResponse = (): Credential => ({
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3c-ccg.github.io/vc-ed-models/contexts/v1/context.json',
  ],
  type: ['VerifiableCredential', 'Assertion'],
  issuer: {
    type: 'Issuer',
    id: 'did:web:digitalcredentials.github.io',
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    name: 'Demo Issuer',
    url: 'https://github.com/digitalcredentials',
  },
  credentialSubject: {
    type: 'Person',
    name: 'Sample Learner',
    hasAchieved: {
      type: ['EducationalOccupationalCredential'],
      id: 'https://github.com/digitalcredentials/sign-and-verify',
      name: 'Verifiable Credential Requested',
      description:
        'Awarded on completion of successful Verifiable Credential requests.',
    },
    id: `did:${randomString()}`,
  },
  id: '6035afa4-9ca6-4504-9d65-5af2482412d7',
  issuanceDate: '2020-11-06T14:04:56.485Z',
  proof: {
    type: '/JsonWebSignature2020',
    'http://purl.org/dc/terms/created': {
      type: 'http://www.w3.org/2001/XMLSchema#dateTime',
      '@value': '2020-11-06T14:04:56.486Z',
    },
    'https://w3id.org/security#jws':
      'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..sVBW2pjqs4UAeNQdoag_OLf9hZgZuv3amX-Lpqq6gb2rYkt5tcCUv8GzGVzUdZ0HD9xG5AqMyBypM1M9sWx9Cw',
    'https://w3id.org/security#proofPurpose': {
      id: 'https://w3id.org/security#assertionMethod',
    },
    'https://w3id.org/security#verificationMethod': {
      id:
        'did:web:digitalcredentials.github.io#96K4BSIWAkhcclKssb8yTWMQSz4QzPWBy-JsAFlwoIs',
    },
  },
});
