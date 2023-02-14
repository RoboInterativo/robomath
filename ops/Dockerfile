FROM node:16.14.0 as BUILDER
WORKDIR /opt/
COPY front ./front
RUN npm install && npm run build
