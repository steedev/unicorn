# Mongoose

### `Query Operators`

|       |                          |
| ----- | ------------------------ |
| `eq`  | equal                    |
| `ne`  | not equal                |
| `gt`  | greater than             |
| `gte` | greater than or equal to |
| `lt`  | less than                |
| `lte` | less than or equal to    |
| `in`  | in                       |
| `ini` | not in                   |

```js
.find({ price: { $gt: 10, $lte: 20 }})
```

### `Regular Exception`

|            |          |
| ---------- | -------- |
| `^`        | start    |
| `\$`       | end      |
| `\.\*\*\.` | contains |

```js
.find({ author: /^He/ })
.find({ author: /su&/i })
.find({ author: /.*su.*/i })
```

### `One way to update`

```js
const course = await Course.updateOne(
    { _id: id }
    {
        $push: {
            tags: "React",
        },
        $inc: {
            entry: 1,
        },
    }
)
```

### `Mongo Populate`

```js
new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
})

async function listCourses() {
  const courses = await Course.find()
    .populate('author', 'name -_id')
    .select('name author')
  console.log(courses)
}
```

### `Mongo ObjectId`

`\_id: 5f26daf366b5a42868469feb`

`12 bytes` -> unique identifi document in MongoDB

---

> `4 bytes:` timestamp

> `3 bytes:` maschine identifier

> `2 bytes:` process identifier

> `3 bytes:` counter

---

> `1 byte` = 8 bits

> 2 ^ 8 = `256`

> 2 ^ 24 = `16M`

---

```js
const id = new mongoose.Types.ObjectId()
console.log(id.getTimestamp())

const idValid = mongoose.Types.ObjectId.isValid('1234')
console.log(isValid)
```

### `Simple Price Validation`

```js
price: {
    type: Number,
    min: 10,
    max: 20,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    required: function () {
      return this.isPublish;
    },
  }
```
