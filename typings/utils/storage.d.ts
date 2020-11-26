interface Storage {
  readonly get: (key: string) => any;
  readonly set: (key: string, value: any) => void;
}

export default Storage;
