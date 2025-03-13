// React Icons Imports
import { FaPlus, FaTrash } from 'react-icons/fa6'
// Chakra UI Imports
import { Box, Button, Stack, Text } from '@chakra-ui/react'

// Stylesheet Imports
import './todo-toolbar.component.scss'

// Root Component (TodoBar)
const TodoBar = () => {
    const createTodoItem = () => {}
    const deleteTodoItem = () => {}
    return (
        <div className="todo__toolbar">
            <Stack
                direction="row"
                padding={0}
                width="full"
                justifyContent="space-between"
            >
                <Text className="todo__toolbar--header" fontSize="xl">
                    User's Todo Dashboard
                </Text>
                <Box className="todo__toolbar--button--container">
                    <Button
                        className="todo__toolbar--button"
                        size="sm"
                        colorPalette="green"
                        rounded="full"
                        marginRight="1.5"
                    >
                        <FaPlus />
                        <p>Add</p>
                    </Button>
                    <Button
                        className="todo__toolbar--button"
                        size="sm"
                        colorPalette="red"
                        rounded="full"
                    >
                        <FaTrash />
                        <p>Delete</p>
                    </Button>
                </Box>
            </Stack>
        </div>
    )
}

export default TodoBar
