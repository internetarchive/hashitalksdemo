FROM node:alpine
COPY . /app
CMD node /app/clock.js
