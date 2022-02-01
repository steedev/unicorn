## 14. Modules

`script.js`

```js
import Employee from './Employee.js'

const employee = new Employee()
```

`Employee.js`

```js
import Person from './Person.js'
class Employee extends Person {}

export default Employee
```

`Person.js`

```js
import Person from './Person.js'
class Person {}

export default Person
```

Sposoby `Exportu & Importu`

```js
import sort from ''
export default sort
```

```js
import { sort } from ''
export { sort }
```

```js
import { sort as sortedVal, rmDupl } from ''
export { sort as default, removeDuplicates as rmDupl }
```

```js
import sort, { sortedVal } from ''
```

```js
export default function toUpper(text) {
  return text
}
```

```js
export * from ''
```

```js
const URL = 'https://'
const MAX_LENGTH = 1

export { URL, MAX_LENGTH }

import * as config from ''

const { URL } = config
```

`Import` without `Export`

Plik, który robi coś globalnie

```js
import './index.js'
```
