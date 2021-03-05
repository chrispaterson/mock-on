type Props = {
  min?:number;
  max?:number;
}

export function mockInt({
  min = 0,
  max = 100,
}: Props = {}): number {

  if (max < min) {

    throw new Error(`Woah! WTF?  You can't have a max number less than a min number... this is what you did: min=${min} and max=${max}`);

  }

  return Math.round(Math.random() * (max - min)) + min;

}
