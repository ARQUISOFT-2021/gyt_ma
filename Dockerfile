FROM node:14
RUN mkdir -p /app
WORKDIR /app


COPY package.json /app/
RUN npm install

COPY . /app

EXPOSE 19002

CMD [ "npm", "start" ]


