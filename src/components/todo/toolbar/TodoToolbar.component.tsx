import { Button, IconButton, Stack, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { showSideBar, toggleSideBar } from '../../../redux/todo-sidebar.slice'

import './todo-toolbar.component.scss'
const TodoBar = () => {
    const dispatch = useDispatch()
    return (
        <div className="todobar-container">
            <div className="todobar">
                <Stack direction="row" padding={0}>
                    <Text className="todobar-header" fontSize="xl">
                        User's Todo Dashboard
                    </Text>
                </Stack>
                <Stack direction="row" className="todobar-buttons">
                    <Button size="sm" colorPalette="green">
                        Add
                    </Button>
                    <Button size="sm" colorPalette="red">
                        Delete
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default TodoBar
