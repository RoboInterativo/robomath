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

lst = [1,2,3,4]
a = np.array([lst[x:2+x] for x in range(0,len(lst),2)])
c = [1,2]
b = np.array(c)
print(np.linalg.solve(a, b))

#async def determinante_computing(item: Item):
#    a = np.array([item.a, item.b])
#    return ItemMatrixOUT(result='',d=a.shape)
