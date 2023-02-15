FROM node:16.14.0 as BUILDER
EXPOSE 8000
WORKDIR /opt/front
COPY front ./
RUN npm install && npm run build


FROM python:3.8-slim

EXPOSE 8000
ENV HOME=/opt
WORKDIR /opt

WORKDIR /opt/
COPY back /opt/
COPY --from=builder  /opt/front/build /opt/templates
RUN pip install virtualenv  &&\
    python -m virtualenv /opt/venv &&\
    chown 1001:1001 /opt/ -R
USER 1001

RUN . /opt/venv/bin/activate &&\
    pip install pip --upgrade &&\
    pip install -r  /opt/requirements.txt &&\
    echo ". /opt/venv/bin/activate && gunicorn --bind 0.0.0.0:8000 flask_main:app" >/opt/run.sh &&\
    chmod +x /opt/run.sh

CMD /opt/run.sh
