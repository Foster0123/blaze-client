import { useSelector } from 'react-redux'

import NavBar from '../../components/navbar/Navbar.component'
import TodoPreview from '../../components/todo/preview/TodoPreview.component'
import TodoSideBar from '../../components/todo/sidebar/TodoSidebar.component'
import TodoBar from '../../components/todo/toolbar/TodoToolbar.component'
import './todo.page.scss'

const Todo = () => {
    const sidebarVisible = true
    return (
        <div>
            <NavBar />
            <div className="todo__container">
                <div className="todo">
                    <TodoBar />
                    {sidebarVisible ? <TodoSideBar /> : ''}
                    <TodoPreview />
                </div>
            </div>
        </div>
    )
}
export default Todo
