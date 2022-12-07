from typing import Union

from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from numpy import linalg as LA
import numpy as np

class Item(BaseModel):
    type: str

    a: float
    b: float
    c: float

class ResOut(BaseModel):
    result: str

    x1: float
    x2: float
    d: float

class ItemMatrix(BaseModel):
    type: str

    m: float
    n: float
    nums: List[float] = []

class ItemMatrixOUT(BaseModel):
    result: str
    x: List[float] = []


app = FastAPI()
app.mount("/static", StaticFiles(directory="../front/build/static"), name="static")
templates = Jinja2Templates(directory="../front/build/")


@app.post("/equation/",response_model=ResOut)
async def calc_square(item: Item):
    d=item.b*item.b -4*item.a*item.c
    rez=ResOut(result='',x1=0,x2=0,d=d)


    return rez


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/linealg/",response_model=ItemMatrixOUT)
async def calculate_matrix(item: ItemMatrix):
    lst=ItemMatrix

    a = np.array([lst[x:2+x] for x in range(0,len(lst),2)])
    b = np.array([item.a, item.b])
    return ResOut(result='',x1=0,x2=0,d=np.linalg.solve(a, b))

async def determinante_computing(item: Item):
    a = np.array([[item.a, item.b]])
    return ResOut(result='',x1=0,x2=0,d=a.shape)
