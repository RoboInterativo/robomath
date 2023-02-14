FROM node:16.14.0 as BUILDER
WORKDIR /opt/front
COPY front ./
RUN npm install && npm run build


FROM python:3.8-slim

WORKDIR /root/
COPY --from=builder /opt/front /opt
CMD ["./app"]
