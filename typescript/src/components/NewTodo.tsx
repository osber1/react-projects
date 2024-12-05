import React, { useContext, useRef } from 'react';
// @ts-ignore
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = input.current!.value;

    if (enteredText.trim().length < 0 || !enteredText) {
      return;
    }

    todoCtx.addTodo(enteredText);
    input.current!.value = '';
  };

  return <form onSubmit={handleSubmit} className={classes.form}>
    <label htmlFor="text">New Todo</label>
    <input type="text" id="text" ref={input} />
    <button>Add</button>
  </form>;
};

export default NewTodo;