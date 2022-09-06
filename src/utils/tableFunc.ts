export type Predicate<Input> = (input: Input) => boolean;

export const tableFunc =
  <Input, Output>(table: Array<[Predicate<Input>, Output]>) =>
  (input: Input): Output | undefined => {
    const [, output] = table.find(([predicate]) => predicate(input)) || [];
    return output;
  };
