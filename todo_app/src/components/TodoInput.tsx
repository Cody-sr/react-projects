import React, { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

function TodoInput({ addTodo }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        className="border"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
