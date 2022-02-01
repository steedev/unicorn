# React Hooks

## Counter

```jsx
function App() {
  const [counter, changeCounter] = useState(0)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => changeCounter(counter - 1)}>-</button>
      <button onClick={() => changeCounter(counter + 1)}>+</button>
    </div>
  )
}
```

### ShoppingList

```jsx
function App() {
  const [shoppingList, setShoppingList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItemToShoppingList = (value) => {
    setShoppingList([...shoppingList, value])
    setInputValue('')
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <ul>
        {shoppingList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input value={inputValue} onChange={handleInputChange} name="item" />
      <button onClick={() => addItemToShoppingList(inputValue)}>Add</button>
    </div>
  )
}
```

### CountryList

```jsx
setCountryList(
  countryList.filter((country) =>
    country.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
  ),
)
```
