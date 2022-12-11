from typing import Union,List

from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from numpy import linalg as LA
import numpy as np
import yaml
from pathlib import Path
import math

BASE_DIR = Path(__file__).resolve().parent
f=open(BASE_DIR / 'conf.yml')
conf=yaml.safe_load(f)
f.close()
app = FastAPI()
if conf.get('front'):

    app.mount("/static", StaticFiles(directory="../front/build/static"), name="static")
    templates = Jinja2Templates(directory="../front/build/")


class Item(BaseModel):
    type: str

    a: float
    b: float
    c: float
    p: float

class ResOut(BaseModel):
    result: str

    x1: float
    x2: float
    d: float

class ItemMatrix(BaseModel):
    type: str

    m: float
    n: float
    c: List[float] = []
    nums: List[float] = []
    nums_for_matrix: List[float] = []

class ItemMatrixOUT(BaseModel):
    result: str
    x: List[float] = []





@app.post("/equation/",response_model=ResOut)
async def calc_square(item: Item):
    d = item.b * item.b - 4 * item.a * item.c
    x1 = (math.sqrt(d) + (-item.b)) / 2 * item.a
    x2 = (math.sqrt(d) - (-item.b)) / 2 * item.a
    rez=ResOut(result='',x1=x1,x2=x2,d=d)


    return rez


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    if conf.get('front'):
        return templates.TemplateResponse("index.html", {"request": request})
    else:
        return 'OK'

@app.post("/linealg/",response_model=ItemMatrixOUT)
async def calculate_matrix(item: ItemMatrix):

    lst = ItemMatrix

    a = np.array([lst[x:2+x] for x in range(0,len(lst),2)])
    b = np.array(lst)
    return ItemMatrixOUT(result='',d=np.linalg.solve(a, b))


@app.post("/determinante/",response_model=ItemMatrixOUT)
async def determinante_computing(item: Item):
    a = np.array([item.a, item.b])
    return ItemMatrixOUT(result='',d=a.shape)

@app.post("/sumarray/",response_model=ItemMatrixOUT)
async def sum_array(item: Item):
    lst = ItemMatrix
    a = np.array(lst)
    b = np.array(lst)
    return ItemMatrixOUT(result='',d=a+b)

@app.post("/sums_arrays/", response_model=ResOut)
async def sum_array2d_with_array1d(item: Item):
    m = np.ones((item.a, item.b))
    a = np.arange(item.c)
    return ResOut(result='',d=a+m)

@app.post("/gipotenuse/",response_model=ResOut)
async def gipotenuse_Pifagor(item: Item):
    c = item.a**2 + item.b**2
    return ResOut(result='',d=math.sqrt(c))

@app.post("/square/",response_model=ResOut)
async def square(item: Item):
    p = item.p // 2
    return ResOut(result='',d=math.sqrt(p*((p-item.a)*(p-item.b)*(p-item.c))))

