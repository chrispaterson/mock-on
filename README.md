![Mock On!](/MockOn_240x160.png?raw=true "Mock On!")

A mocking library for unit testing in JavaScript and TypeScript.

# Why?

Using Mock On! helps prevent copy-paste unit testing. I find that unit tests with copy-pasted dummy data, often use the same values over and over. This can be problematic if there is any bleeding values between tests and really doesn't test the whole range of a piece of code.

**This**:

```TypeScript
interface Shape {
  id: string;
  url: string;
}
const testShapes = [
    {
        id: `shapeid-0`,
        url: "http://www.example.com/image.jpg"
    },
    {
        id: `shapeid-1`,
        url: "http://www.example.com/image.jpg"
    },
    {
        id: `shapeid-2`,
        url: "http://www.example.com/image.jpg"
    },
    {
        id: `shapeid-3`,
        url: "http://www.example.com/image.jpg"
    },
    {
        id: `shapeid-4`,
        url: "http://www.example.com/image.jpg"
    }
];
```

**Becomes**:

```TypeScript
import { mockArrayOf, mockString, mockUrl } from "mock-on";

interface Shape {
  id: string;
  url: string;
}

const testShapes = mockArrayOf((): Shape => ({ id: mockString(), url: mockUrl() });

```

# Mock Generators

## Basic

### `mockInt`

Generates a random integer.

| Property Name | Type     | Required | Default | Description           |
| :------------ | :------- | :------: | :-----: | :-------------------- |
| `min`         | `number` |    No    |   `0`   | minimum integer value |
| `max`         | `number` |    No    |  `100`  | maximum integer value |

**Example**

Generate a random integer value between 0 and 100

```TypeScript
const myInt = mockInt();
```

**Example**

Generate a random integer value between two values

```TypeScript
const myInt = mockInt({ min: 10, max: 20 });
```

### `mockBoolean`

Generates a random boolean.

| Property Name | Type | Required | Default | Description |
| :------------ | :--- | :------: | :-----: | :---------- |
| -             | -    |    -     |    -    | -           |

**Example**

Generate a random boolean value.

```TypeScript
const myBoolean = mockBoolean();
```

### `mockString`

Generates a random string. By default this function will generate a string between ascii values 48-57 (numbers), 65-90 (A-Z), and 97-122 (a-z).

| Property Name         | Type     | Required  |      Default      | Description |
| :-------------------- | :------- | :-------: | :---------------: | :---------- |
| `maxLength`           | `number` |    No     |       `30`        |
| maximum string length |
| `minLength`           | `number` |    No     |        `1`        |
| minimum string length |
| `charCodeStart`       | `number  | number[]` | [48,65,97] Single |

    charCode value or multiple starts to build ranges.  **Must Correspond
    with `charCodeEnd`** |

| `charCodeEnd` | `number | number[]` | [48,65,97] Single charCode value or
multiple ends to build ranges. **Must Correspond with `charCodeStart`** |
| `charSet` | `string[]` | No | - | an array of characters to use. If this value
is passed it will take prescedence over `charCodeStart` and `charCodeEnd` values |

**Example**

Generate a random string value that is between 1 and 30 characters long.

```TypeScript
const myString = mockString();
```

**Example**

Generate a random string value that is between two a minimum and maximum length.

```TypeScript
const myString = mockString({ maxLength: 100, minLength: 80 });
```

**Example**

Generate a random string value of only lowercase letters.

```TypeScript
const myString = mockString({ charCodeStart: 97, charCodeEnd: 122 });
// or
const myString = mockString({ charCodeStart: [ 97 ], charCodeEnd: [ 122 ] });
```

**Example**

Generate a random string value of lowercase letters and punctuation.

```TypeScript
const myString = mockString({
  charCodeStart: [97, 33, 44, 46, 63],
  charCodeEnd: [122, 33, 44, 46, 63],
});
```

**Example**

Generate a random string value of out of a set of characters.

```TypeScript
const myString = mockString({ charSet: ['a','b','c','d','-'] });
```

## Less Basic

### `mockArrayOf`

Generates an Array of a single value that is created via the create argument.

| Property Name | Type                       | Required | Default | Description                                                                           |
| :------------ | :------------------------- | :------: | :-----: | :------------------------------------------------------------------------------------ |
| `create`      | `(index?: number) => Type` |   Yes    |    -    | function that creates an instance for the array                                       |
| `maxLength`   | `number`                   |    No    |  `30`   | maximum array length                                                                  |
| `minLength`   | `number`                   |    No    |   `1`   | minimum array length                                                                  |
| `length`      | `number`                   |    No    |    -    | specific array length. If specified this overrides the `minLength`/`maxLength` values |

**Example**

Generate an array of a given type between 3 and 5 items long.

```TypeScript
interface MyObject {
  id: string;
  url: string;
}

const arrayOfMyObjects: MyObject[] = mockArrayOf(
  (index: number): MyObject => ({
    id: `id-${index}`, url: mockUrl(),
  }),
  {
    maxLength: 5, minLength: 3,
  },
);
```

### `mockHexColor`

Generates a random six character hex color string

| Property Name | Type | Required | Default | Description |
| :------------ | :--- | :------: | :-----: | :---------- |
| -             | -    |    -     |    -    | -           |

**Example**

Generate a random hex color.

```TypeScript
const myHexColor = mockHexColor();
```

### `mockIntArray`

Generates a random array of integers

| Property Name | Type      | Required | Default | Description                                                                           |
| :------------ | :-------- | :------: | :-----: | :------------------------------------------------------------------------------------ |
| `min`         | `number`  |    No    |   `0`   | minimum integer value                                                                 |
| `max`         | `number`  |    No    |  `100`  | maximum integer value                                                                 |
| `maxLength`   | `number`  |    No    |  `30`   | maximum array length                                                                  |
| `minLength`   | `number`  |    No    |    1    | minimum array length                                                                  |
| `length`      | `number`  |    No    |    -    | specific array length. If specified this overrides the `minLength`/`maxLength` values |
| `unique`      | `boolean` |    No    | `false` | `true` if all integers should be unique                                               |

### `mockItem`

### `mockPath`

### `mockSegmentedString`

### `mockStringArray`

### `mockSubset`

### `mockUrl`

# Utilities

### `getPowerSet`

### `isPrimitive`

### `maybeUndefined`

### `shuffle`
