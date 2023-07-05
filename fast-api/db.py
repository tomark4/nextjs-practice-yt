from motor.motor_asyncio import AsyncIOMotorClient
from models import Task
from bson import ObjectId

# create client
client = AsyncIOMotorClient("mongodb://root:example@0.0.0.0:27017/?authMechanism=DEFAULT")

# create database
database = client.fastapi

# create collection
collection = database.tasks

# one task by id
async def get_task_by_id(id):
  task = await collection.find_one({'_id':ObjectId(id)})
  return task

# one task by title
async def get_task_by_title(title):
  task = await collection.find_one({'title':title})
  return task

# get all
async def get_all_tasks():
  tasks = []
  cursor = collection.find({})

  async for d in cursor:
    tasks.append(Task(**d))

  return tasks

# create task
async def add_task(task):
  new_task = await collection.insert_one(task)
  created_task = await collection.find_one({'_id': new_task.inserted_id})
  return created_task

# update task
async def update_task(id, payload):
  await collection.update_one({'_id',id}, {'$set':payload})
  new_data = await collection.find_one({'_id': id})
  return new_data

# delete task
async def deleye_task(id):
  await collection.delete_one({'_id',id})
  return True
