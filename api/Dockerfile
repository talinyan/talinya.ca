FROM node:24-alpine
WORKDIR /app
RUN npm init -y >/dev/null && npm pkg set type=module && npm install fastify @fastify/cors unpdf
COPY server.js .
CMD ["node", "server.js"]