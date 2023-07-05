"use client";
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
      const resp = await axios.post("http://localhost:8000/api/tasks/", values);
      setValues(initialValues);
      toast.success("Task successfully created!");
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h[calc(100vh-10rem)] mt-10">
      <form
        className="bg-zinc-100 p-10 rounded-md drop-shadow-md w-[600px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl mb-4">Add new task</h1>
        <p className="mb-7 text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          enim?
        </p>
        <div className="mb-10">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title task
          </label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={values.title}
            className="input"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor="desc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task description
          </label>
          <textarea
            name="desc"
            value={values.desc}
            placeholder="Description"
            onChange={handleChange}
            id="desc"
            rows={3}
            className="textarea"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 rounded p-2 w-full text-white font-bold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TasksPage;
