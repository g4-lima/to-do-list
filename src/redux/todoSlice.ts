import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// export const getTodoAsync: any = createAsyncThunk(
//     'todos/getTodoAsync',
//     async () => {
//         const response = await fetch('https://chronos.compraqui.app/api/tasks');
//         if(response.ok) {
//             const todos = await response.json();
//             return { todos }
//         }
//     }
// );

export const getTodoAsync: any = createAsyncThunk(
        'todos/getTodoAsync',
        () => axios
            .get('https://chronos.compraqui.app/api/tasks')
            .then(response => response.data)
            .catch(error => error)
);

export const addTodoAsync: any = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
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
    async (payload) => {
        const response = await fetch(
            `https://chronos.compraqui.app/api/tasks/${payload.guid}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'applications.json',
                },
                body: JSON.stringify({ situation: payload.situation })
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
    async (payload) => {
        const response = await fetch(
            `https://chronos.compraqui.app/api/tasks/${payload.guid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'applications.json',
                },
                body: JSON.stringify({ guid: payload.guid, title: payload.title, description: payload.description, situation: payload.situation })
            }
            
        );
        console.log(payload);


        if (response.ok) {
            const todo = await response.json();
            return { todo };
        } else {
            console.log('fail')
        }
    }
);

// export const updateTodoAsync: any = createAsyncThunk(
//     'todos/updateTodoAsync',
//     (payload) => axios
//         .put(`https://chronos.compraqui.app/api/tasks/${payload.guid}`)
//         .catch(error => error)
// );

export const deleteTodoAsync: any = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload) => {
        const response = await  fetch(`https://chronos.compraqui.app/api/tasks/${payload.guid}`, {
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
        { guid: 'string', title: 'string', description: 'string', situation: "uncompleted" }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                guid: 'string',
                title: action.payload.title,
                description: action.payload.description,
                situation: "uncompleted"
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
            console.log(action.payload)
            const index = state.findIndex((todo) => todo.guid === action.payload.guid);
            state[index].title = action.payload.title;
            state[index].description = action.payload.description;
        }
    },
    extraReducers: {
        // [getTodoAsync.fulfilled]: (state, action) => {
        //     return action.payload.todos;
        // },
        [getTodoAsync.fulfilled]: (state, action) => {
            return action.payload;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.findIndex((todo) => todo.guid === action.payload.todo.guid);
            state[index].situation = action.payload.todo.situation;
        },
        [updateTodoAsync.fulfilled]: (state,action) => {
            const index = state.findIndex((todo) => todo.guid == action.payload.todo.guid);
            state[index].title = action.payload.title;
            state[index].description = action.payload.todo.description;
            state[index].situation = action.payload.todo.situation;
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            console.log(action.payload.guid)
            console.log(state.filter((todo) => todo.guid !== action.payload.guid))
            return state.filter((todo) => todo.guid !== action.payload.guid);
        },
    }
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;