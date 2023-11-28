import { configureStore, createSlice } from "@reduxjs/toolkit";
/**
 * Cette constante permet d'initialiser une tranche de todo avec redux
 * '@name' est le nom de notre etat
 * '@initialState' est sa valeur par defaut
 * '@reducers' sont les principales actions que l'on peut performer sur notre etat
 */
const todoSlice = createSlice({
    name:"todo",
    initialState:[
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
        { id: 3, text: "Refaire les courses", done: true },
      ],
    reducers:{
        addTask: (state,action)=>{
            //{type:"todo/addTask",payload:"Ecouter la playlist de DRAKE"}
            const newTask = {
                id: Date.now(),
                done:false,
                text: action.payload
            }

            state.push(newTask);
        },
        toggleTask: (state,action)=>{
            //{type:"todo/toggleTask",payload:2}
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done
        },
        deleteTask: (state,action)=>{
            //{type:"todo/deleteTask",payload:2}
            state.filter(task => task.id !== action.payload)
            return state;
        },
    }  
});

/**
 * Creation du store qui est l'entrepot global
 */

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
})

// Creation manuelle d'une action creation pour faciliter le dispatching des fonctions

export const createToggle = (id)=>{
    return {
        type:"todo/toggleTask",
        payload: id
    };
}

// Creation automatique des action creators grace à redux
export const { addTask,toggleTask,deleteTask } = todoSlice.actions;