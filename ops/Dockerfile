FROM node:16.14.0
WORKDIR /opt/front
RUN echo "npm install && npm run build">/home/build.sh &&chmod +x /home/build.sh
CMD /home/build.sh
