from fastapi import FastAPI,HTTPException
from db import (
  get_all_tasks,
  get_task_by_id,
  add_task,
)

from models import Task

app = FastAPI()

@app.get("/")
def home():
  return {'message':'success'}

@app.get("/api/tasks")
async def list():
  tasks = await get_all_tasks()
  return tasks

@app.get("/api/tasks/{id}", response_model=Task)
async def retrieve(id):
  task = await get_task_by_id(id)
  
  if task:
    return task
  
  raise HTTPException(404,f"Task with id {id} not found")

@app.post("/api/tasks", response_model=Task)
async def create(payload: Task, ):
  new_task = await add_task(payload.dict())

  # search = await get_task_by_title(payload.title)
  # if(search):
  #   raise HTTPException(409, 'Task already exists')
  
  if(new_task):
    return new_task
  raise HTTPException(400,'Something went wrong')

@app.put("/api/tasks/{id}")
async def update():
  return {'message': 'Update!'}

@app.delete("/api/tasks/{id}")
async def destroy():
  return {'message': 'Deleted!'}

