# React

### Czym jest React.js

`React` to biblioteka do tworzenia interfejsów, pozwalająca na tworzenie reużywalnych komponentów

`Komponent ma`:

1. własny html (JSX)
2. własną logikę
3. własny styl

`Virtual DOM` - obiekt trzymający lustrzane odbicie naszego DOM, następnie porównywany jest, a same zmiany zostają aplikowane

`JSX` to cukier ułatwiający nam pisanie kodu

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  // rendered element
  <h1>Hello world</h1>
  // target
  document.getElementById('root')
)
```

`Tak wyglądałoby to bez niego`

```jsx
const App = React.createElement(
  'h1',
  {
    className: 'wrapper',
  },
  [
    React.createElement(
      'h1',
      {
        className: 'mainHeader',
      },
      'Hello world',
    ),
    React.createElement(
      'h2',
      {
        className: 'secondaryHeader',
      },
      'Hello eduweb',
    ),
  ],
)

ReactDOM.render(App, document.getElementById('root'))
```

### Tworzenie komponentu funkcyjnego

`Funkcje` nie są prawidłowymi dziećmi w react

```jsx
const App = () => (
  <div className="wrapper">
    <h1 className="mainHeader">Hello, world</h1>
    <h1 className="secondaryHeader">Hello, eduweb</h1>
  </div>
)
```

### Rodzaje importów i exportów

`Named export` - zawsze używamy takiej samej zmiennej nazwy jaką exportowaliśmy

```jsx
export const App = () => ()

import { App } from './App'
```

`Default export` - możemy mieć tylko jeden export na jeden plik, nie obowiązuje nas zasada importu tej samej zmiennej nazwy

```jsx
export default App

import App from './App'
```

### Propsy

`Przed` refaktoryzacją

```jsx
const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {twitterAccounts.map((item) => (
      <ListItem
        name={item.name}
        description={item.description}
        image={item.image}
        link={item.twitterLink}
      />
    ))}
  </ul>
)
```

`Po` refaktoryzacji

```jsx
const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {twitterAccounts.map((item) => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
)

const ListItem = ({ name, description, image, twitterLink }) => ()
```

### PropTypes

```jsx
ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
  description: 'One of the React creators',
}
```

### State & Controlled Input

```jsx
class MyComponent extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value.toUpperCase() })
  }

  render() {
    return (
      <>
        <input
          placeholder="your text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <h1>{this.state.text}</h1>
      </>
    )
  }
}
```

`Stary zapis klasy`

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ text: e.target.value.toUpperCase() })
  }
}
```

### setState

```jsx
addItem = (e) => {
  e.preventDefault()

  const newItem = {
    name: e.target[0].value,
    twitterLink: e.target[1].value,
    image: e.target[2].value,
    description: e.target[3].value,
  }

  this.setState((prevState) => ({
    items: [...prevState.items, newItem],
  }))

  e.target.reset()
}
```

### ES IF

```jsx
const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? 'img' : 'div'

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        className={image ? styles.image : styles.imageNone}
        alt={name}
      />
    </li>
  )
}

ListItem.propTypes = {
  image: PropTypes.string,
}

ListItem.defaultProps = {
  image: null,
}
```

### Unsplash

```scss
.imageNone {
  @extend .image;

  background: url('https://unsplash.it/200/200') no-repeat;
  background-size: cover;
}
```

### Re-use Input

```jsx
const Input = ({ tag: Tag, name, label, maxLength }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      type="text"
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder=" "
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
)
```

```jsx
<Input
  name="name"
  label="Name"
  maxLength={30}
/>

<Input
  name="link"
  label="Twitter link"
/>

<Input
  name="image"
  label="Image"
/>

<Input
  tag="textarea"
  name="description"
  label="Description"
/>
```

### children - innerHTML & Renderowanie warunkowe

```jsx
const Button = ({ children, href }) => (
  <>
    {href ? (
      <a
        href={href}
        target="_blank"
        className={styles.button}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button className={styles.button}>{children}</button>
    )}
  </>
)
```

```jsx
const Title = ({ children }) => <h2 className={styles.title}>{children}</h2>
```

### Router

Domyślnie mamy tylko jedną stronę `index.html`, zadaniem `React Routera` jest wyrenderowanie wołanej strony do wspomnianego pliku

`=> www.helloroman.com/about`

`<= render About.js`

```
/views
  /ArticlesView
    ArticlesView.js
  /NotesView
    NotesView.js
  /Root
    Root.js
    index.js
  /TwittersView
    TwittersView.js
```

`yarn add react-router react-router-dom`

Easy way

```jsx
<BrowserRouter>
  <>
    <h1>hello world</h1>
    <Route exact path="/" component={TwittersView} />
    <Route path="/articles" component={ArticlesView} />
    <Route path="/notes" component={NotesView} />
  </>
</BrowserRouter>
```

`One Component Site`

```jsx
<BrowserRouter>
  <>
    <h1>hello world</h1>
    <Switch>
      <Route exact path="/" component={TwittersView} />
      <Route path="/articles" component={ArticlesView} />
      <Route path="/notes/" component={NotesView} />
      <Route path="/notes/:id" component={NotesView} />
    </Switch>
  </>
</BrowserRouter>
```

`Create NavLinks`

```jsx
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink exact className={styles.navItemLink} to="/">
          Twitters
        </NavLink>
```

`Create Header Button Secondary`

```jsx
const buttonClass = secondary ? styles.secondary : styles.button
```

### Modal

```jsx
state = {
  isModalOpen: false,
}

 openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })

const { isModalOpen } = this.state

return (
  {isModalOpen && <Modal closeModalFn={this.closeModal} />}
)
```

### Next ...props

```jsx
const Button = ({ children, href, secondary, ...props }) => {
  const buttonClass = secondary ? styles.secondary : styles.button

  return (
    <>
      {href ? (
        <a
          href={href}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className={buttonClass} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
```

### Forms

`Less errors`

```jsx
const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favorite Twitter account",
  article: "Article",
  note: "Note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  };
```

`Renderowanie warunkowe`

```jsx
{
  activeOption !== types.note ? (
    <Input
      name="link"
      label={activeOption === types.twitter ? 'Twitter Link' : 'Link'}
    />
  ) : null
}

{
  activeOption === types.twitter ? <Input name="image" label="Image" /> : null
}
```

`Callback func`

```jsx
<form
  autoComplete="off"
  className={styles.form}
  onSubmit={this.props.submitFn}
>

//

<Radio
  id={types.note}
  checked={activeOption === types.note}
  changeFn={() => this.handleRadioButtonChange(types.note)}
>
  Note
</Radio>
```

### Context API

`Create context /src/context.js`

```jsx
import React from 'react'

const AppContext = React.createContext()

export default AppContext
```

`Deklaracja state dla contextu`

```jsx
const contextElements = {
  ...this.state,
  addItem: this.addItem,
}
```

`Provider` - zawiera tagi, które aplikują się do contextu

```jsx
return (
  <BrowserRouter>
    <AppContext.Provider value={contextElements}>
      <Header openModalFn={this.openModal} />
      <Switch>
        <Route exact path="/" component={TwittersView} />
        <Route path="/articles" component={ArticlesView} />
        <Route path="/notes" component={NotesView} />
      </Switch>
      {isModalOpen && <Modal closeModalFn={this.closeModal} />}
    </AppContext.Provider>
  </BrowserRouter>
)
```

`Consumer` - odbiera te dane z tunelu, jednak w przeciwieństwie do `Providera` nie czyta jsx, dlatego trzeba kod opleść w funkcję

```jsx
const ArticlesView = () => (
  <AppContext.Consumer>
    {(context) => <List items={context.article} />}
  </AppContext.Consumer>
)
```

### Intelli Form - Controlled Input

```jsx
state = {
  type: types.twitter,
  title: '',
  link: '',
  image: '',
  description: '',
}

handleInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}
```

```jsx
<Input
  onChange={this.handleInputChange}
  value={this.state.link}
  name="link"
  label={type === types.twitter ? 'Twitter Link' : 'Link'}
/>
```

### Deploy on netlify

```
yarn build
netlify deploy
  deploy path build
netlify deploy --prod
```

```
/public
  _redirects
```

```
/* /index.html 200
```
