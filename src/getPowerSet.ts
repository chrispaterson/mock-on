type Props = {
  numItems: number;
}

export function getPowerSet({numItems}: Props): boolean[][] {

  const total = 1 << numItems;
  const powSet: boolean[][] = [];

  for (let i =0; i < total; i++) {

    const group: boolean[] = [];

    for (let j=0; j < numItems; j++) {

      group.push(!!((i >> j) & 1));

    }

    powSet.push(group);

  }

  return powSet;

}
