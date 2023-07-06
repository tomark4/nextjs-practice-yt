"use client";
import { storeTask } from "@/api/tasks";
import TaskForm from "@/components/TaskForm";
import { getApiUrl } from "@/utils";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const initialValues = {
  title: "",
  desc: "",
};

const TasksPage = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await storeTask(values);
      setValues(initialValues);
      toast.success("Task successfully created!");
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h[calc(100vh-10rem)] mt-10">
      <TaskForm
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TasksPage;
