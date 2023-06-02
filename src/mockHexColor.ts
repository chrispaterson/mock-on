type Args = {
  leadingChar: string;
};

export const mockHexColor = ({leadingChar = ''}: Args): string =>
  leadingChar +
  parseInt(String(16 ** 6 * Math.random()), 10)
    .toString(16)
    .padStart(6, '0');
