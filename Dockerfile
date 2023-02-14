FROM node:16.14.0 as BUILDER
WORKDIR /opt/front
COPY front ./
RUN npm install && npm run build
