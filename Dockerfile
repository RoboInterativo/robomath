FROM node:16.14.0 as BUILDER
WORKDIR /opt/front
COPY front ./
RUN npm install && npm run build


FROM python3.8:latest

WORKDIR /root/
COPY --from=builder /opt/front /opt
CMD ["./app"]
