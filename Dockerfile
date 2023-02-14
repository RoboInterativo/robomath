FROM node:16.14.0 as BUILDER
WORKDIR /opt/front
COPY front ./
RUN npm install && npm run build


FROM python:3.8-slim

EXPOSE 8000
ENV HOME=/opt
WORKDIR /opt

WORKDIR /opt/
COPY back /opt
COPY --from=builder /opt/templates
RUN pip install virtualenv  &&\
    python -m virtualenv /opt/venv &&\
    chown 1001:1001 /opt/ -R

RUN . /opt/venv/bin/activate &&\
    pip install pip --upgrade &&\
    pip install -r  /opt/requirements.txt
CMD ["gunicorn flask_main:app"]
