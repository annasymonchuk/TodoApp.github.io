const Todo =({todo, onDelete, onToggel})=>(
    <li>
    <input  type="checkbox" onChange={onToggel} checked={todo.checked}/>
    <span>{todo.text}</span>
    <button onClick={onDelete}>Delete</button>
    </li>
)

let id=0;
function App() {
    let[todos, setTodos]=React.useState([])
    function newTodo() {
        let text = prompt('enter new task');
        const todo = { id: id++, text, checked: false};
        setTodos([...todos,todo]);
        console.log('todos',todos);
    }
    function removeTodo(id){
        setTodos([...todos.filter(todo => todo.id !== id)]);
    }
    function toggleTodo(id){
        setTodos([...todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked}:todo)]);
    }
    return (
        <div>
        <h1 >My TODO App</h1>
        <div>
          <span>Item count: {todos.length}</span><br />
          <span>Unchecked count: {todos.filter(todo => !todo.checked).length}</span>
        </div>
        <button onClick={newTodo}>New TODO</button>
        <ul>
            {todos.map(todo => <Todo 
            key={todo.id}
            todo={todo} 
            onDelete={() => {removeTodo(todo.id)}}
            onToggel={() => {toggleTodo(todo.id)}}
            />)}
        </ul>
      </div>
    );
}
  
  const container = document.getElementById('app');
  const root = ReactDOM.createRoot(container);
  
  root.render(<App />);