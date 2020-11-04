export interface VerifyPanelProps {
  onVerifySuccess: () => void;
}

export interface CipherRowProps {
  ciphers: number[];
  onCipherPress: (cipher: number) => void;
}
