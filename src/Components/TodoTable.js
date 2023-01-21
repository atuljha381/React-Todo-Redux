import React from "react";
import TodoPopulate from "./TodoPopulate";
import { useSelector } from "react-redux";

export default function TodoTable(props) {
  const tododata = useSelector((state) => state.todo.items);
  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#Id</th>
            <th>Work</th>
            <th>Status</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        {tododata.map((item) => (
          <TodoPopulate
            key={item.id}
            item={{ id: item.id, work: item.work, status: item.status }}
          />
        ))}
      </table>
    </section>
  );
}

