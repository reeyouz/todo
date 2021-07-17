import React from "react";
import { Dots } from "components/common/Icons/Dots";
import { LabelText } from "components/common/LabelText";
import { Menu } from "components/common/Menu";
import { Link } from "react-router-dom";

export function Todo({ todo, onToggle }) {
  return (
    <li className="flex justify-between sm:shadow-md bg-white p-2 rounded-full">
      <label className="inline-flex items-center ml-2">
        <input
          name="todo"
          type="checkbox"
          onChange={() => onToggle(todo)}
          checked={todo.isComplete}
          aria-checked={todo.isComplete}
          className="mr-4 rounded-full h-5 w-5"
        />
        <LabelText todo={todo} />
      </label>
      <Menu className="relative">
        <Menu.Button>
          <Dots className="cursor-pointer text-gray-600" fill="gray" />
        </Menu.Button>
        <Menu.Items className="dropdown">
          <Menu.Item>
            <Link to={`/todos/edit/${todo.id}`} className="dropdown-item">
              Edit
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/todos/delete/${todo.id}`} className="dropdown-item">
              Delete
            </Link>
          </Menu.Item>
          <Menu.Item>
            <span className="dropdown-item">Test</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </li>
  );
}