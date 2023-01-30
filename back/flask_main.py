from flask import jsonify, request
from flask import url_for

from flask import Flask
import yaml
from pathlib import Path
from flask import render_template


BASE_DIR = Path(__file__).resolve().parent

# template_dir = BASE_DIR / "../front/build/"
# print (template_dir)
# app = Flask(__name__, template_folder=template_dir)
app = Flask(__name__)



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
