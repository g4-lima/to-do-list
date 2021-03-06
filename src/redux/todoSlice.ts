import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface iPayload {
    guid: string;
    title: string;
    description: string;
    situation: "completed" | "uncompleted";
}

export const getTodoAsync: any = createAsyncThunk(
    'todos/getTodoAsync',
    async () => {
        const response = await fetch('https://chronos.compraqui.app/api/tasks');
        if(response.ok) {
            const todos = await response.json();
            return { todos }
        }
    }
);

export const addTodoAsync: any = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload: iPayload) => {
        const response = await fetch('https://chronos.compraqui.app/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: payload.title, description: payload.description })
        });

        if (response.ok) {
            const todo = await response.json();
            return { todo };
        }
    }
);

export const toggleCompleteAsync: any = createAsyncThunk(
    'todos/completeTodoAsync',
    async (payload: iPayload) => {
        console.log(payload)
        const response = await fetch(
            'https://chronos.compraqui.app/api/tasks',
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ guid: payload.guid, title: payload.title, description: payload.description, situation: "completed" }),
            }
        );

        if (response.ok) {
            const todo = await response.json();
            return { todo };
        }
    }
);

export const updateTodoAsync: any = createAsyncThunk(
    'todos/updateTodoAsync',
    async (payload: iPayload) => {
        const response = await fetch(
            'https://chronos.compraqui.app/api/tasks', {
                method: 'PUT',  
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }            
        )

        if (response.ok) {
            const todo = await response.json();
            return { todo };
        } else {
            console.log('fail')
        }
    }
);

export const deleteTodoAsync: any = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload: iPayload) => {
        const response = await fetch(`https://chronos.compraqui.app/api/tasks/${payload.guid}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            return { guid: payload.guid }
        }
    }
)

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { guid: 'string', title: 'string', description: 'string', situation: 'uncompleted' }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                guid: 'string',
                title: action.payload.title,
                description: action.payload.description,
                situation: 'uncompleted'
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.guid === action.payload.guid);
            state[index].situation = action.payload.situation;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.guid !== action.payload.guid);
        },
        updateTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.guid === action.payload.guid);
            state[index].title = action.payload.title;
            state[index].description = action.payload.description;
        }
    },
    extraReducers: {
        [getTodoAsync.fulfilled]: (state, action) => {
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.findIndex((todo) => todo.guid === action.payload.todo.guid);
            state[index].title = action.payload.todo.title;
            state[index].description = action.payload.todo.description;
            state[index].situation = action.payload.todo.situation;
        },
        [updateTodoAsync.fulfilled]: (state,action) => {
            const index = state.findIndex((todo) => todo.guid === action.payload.todo.guid);
            state[index].title = action.payload.todo.title;
            state[index].description = action.payload.todo.description;
            state[index].situation = action.payload.todo.situation;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            return state.filter((todo) => todo.guid !== action.payload.guid);
        },
    }
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;