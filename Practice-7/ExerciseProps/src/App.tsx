import './App.css'
import Title from './components/Title'
import Text from './components/Text'
import List from './components/List'
import Link from './components/Link'
import Loading from './components/Loading'

function App() {


  return (
    <>
    <Loading show={true}>
      <Title/>
      <Text/>
      <List/>
      <Link href="https://react.dev/" openInNewTab={true}>
        React Docs
      </Link>
    </Loading>
    </>
  )
}

export default App
