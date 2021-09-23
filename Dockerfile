FROM node:lts


WORKDIR /home

COPY . /home
RUN cd /home;ls;npm install; npm build

ENV NUXT_HOST=0.0.0.0
CMD node /home/.output/server/index.mjs