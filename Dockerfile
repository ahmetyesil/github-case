FROM node as deps

#devops test
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.3.1
RUN npm install nodemon -g --save
RUN npm install next --legacy-peer-deps
COPY . .

FROM node as builder
WORKDIR /app
COPY --from=deps /app ./
RUN npm run build:development

FROM node as runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
RUN npm install nodemon -g --save
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]