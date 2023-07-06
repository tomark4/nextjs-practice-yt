import { Task } from "@/types";
import Link from "next/link";
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex gap-4 flex-wrap container">
      {tasks.map((item) => (
        <TaskItem item={item} key={item._id} />
      ))}
    </div>
  );
};

export default TaskList;
