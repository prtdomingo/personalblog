FROM ghost:2-alpine

RUN npm i -g applicationinsights
RUN cd current && npm link applicationinsights

COPY ./index.js /var/lib/ghost/current/
