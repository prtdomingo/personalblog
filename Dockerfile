FROM ghost:2-alpine

RUN npm i -g applicationinsights
RUN cd current && npm link applicationinsights

COPY ./site-config.js /var/lib/ghost/current/

RUN echo "require('./site-config.js');" >> /var/lib/ghost/current/index.js
