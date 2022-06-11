/**
 * thie function generates a random integer value between a min and max value.
 * The defaul min is 0 and the default max is 100.
 */
type Props = {
  min?: number;
  max?: number;
};

export function mockInt({
  min = 0, max = 100,
}: Props = {}): number {

  if (max < min) {

    throw new Error(
      `Woah! WTF?  You can't have a max number less than a min number... this is what you did: min=${min} and max=${max}`,
    );

  }

  return Math.round(Math.random() * (max - min)) + min;

}
