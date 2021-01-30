import { Provider } from 'react-redux'
import store from './redux/store'

import Header from './components/header'
import TaskForm from './components/task-form'
import TaskFilters from './components/task-filters'
import TaskList from './components/task-list'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <TaskForm />
        <TaskFilters />
        <TaskList />
      </div>
    </Provider>
  )
}

export default App
