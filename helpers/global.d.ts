declare global {
  interface Error {
    public status?: number;
    public message: string;
    constructor(message?: string);
  }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
// eslint-disable-next-line import/no-anonymous-default-export
export default {};