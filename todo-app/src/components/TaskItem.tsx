import { Task } from "@/types";
import Link from "next/link";
import React from "react";

const TaskItem = ({ item }: { item: Task }) => {
  return (
    <Link
      href={`/tasks/${item._id}`}
      key={item._id}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer w-[400px] min-h-[120px]"
    >
      <h2 className={item.completed ? "line-through" : ""}>{item.title}</h2>
      <p>{item.desc}</p>
      {item.completed && <p className="text-slate-600">Finalizada!</p>}
    </Link>
  );
};

export default TaskItem;
