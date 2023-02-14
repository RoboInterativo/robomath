from flask import jsonify, request
from flask import url_for

from flask import Flask
import yaml
from pathlib import Path
from flask import render_template
from jinja2 import Environment


from math import sqrt


BASE_DIR = Path(__file__).resolve().parent

# template_dir = BASE_DIR / "../front/build/"
# print (template_dir)
# app = Flask(__name__, template_folder=template_dir)
app = Flask(__name__)

def result_text_render(result_text,result):
    res=[]
    text=''
    env = Environment()

    for item in result_text:

        tmpl = env.from_string(item['text'])
        text= tmpl.render(result)

        rs={
            'id': item['id'],
            'type': item['type'],
            'text':text
        }
        res.append(rs)
    return res

def calculate(slug1,slug2,params):
    f=open(BASE_DIR / 'db.yml')
    db=yaml.safe_load(f)
    f.close()

    if slug1=='equation':
        if slug2=='quadratic':
            a=float (params['a'])
            b=float (params['b'])
            c=float (params['c'])


            d=b*b-4*a*c
            result_text=db.get('article').get(slug1).get(slug2)[0].get('calculator').get('result_text')
            if d>=0:
                x1=(-b+sqrt(d))/(2*a)
                x2=(-b+sqrt(d))/(2*a)
                result={'a':a,
                        'b':b,
                        'c':c,
                        "d": d,
                        'x1':x1,
                        'x2':x2
                        }
            else:
                result={'a':a,
                        'b':b,
                        'c':c,
                        "d": d,
                        'x1':x1,
                        'x2':x2
                        }
            return result_text_render(result_text,result)


@app.route("/api/сalc", methods=['POST'])
def calc():

    f=open(BASE_DIR / 'db.yml')
    db=yaml.safe_load(f)
    f.close()
    data = request.get_json()
    slug1= data.get('slug1')
    slug2= data.get('slug2')

    l=db.get('article').get(slug1).get(slug2)[0].get('calculator').get('form')
    print(l,data)
    rez=True
    for item in l:
        name=item.get('input')

        if not data.get('params').get(name):
            rez=False
            print ('name '+name)
            break
    if rez:

        params=data.get('params')
        result=calculate(slug1,slug2,params)
    else:
        result={"valid":False}



    return jsonify({'result': result  }  )

@app.route("/api/detail", methods=['POST'])
def detail():
    f=open(BASE_DIR / 'db.yml')
    db=yaml.safe_load(f)
    f.close()
    data = request.get_json()
    slug1= data.get('slug1')
    slug2= data.get('slug2')

    return jsonify({'result': db.get('article').get(slug1).get(slug2)  }  )

@app.route("/api/main", methods=['POST'])
def list_cat():
    f=open(BASE_DIR / 'db.yml')
    db=yaml.safe_load(f)
    f.close()
    return jsonify({'result': db  }  )

@app.route("/")
def index():
    return render_template ("build/index.html")

if __name__ == "__main__":
    app.run(debug=True )
