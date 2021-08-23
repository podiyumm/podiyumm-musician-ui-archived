# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --mode production

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
# https://router.vuejs.org/guide/essentials/history-mode.html#nginx
RUN sed -i 's|location / {|location / {\n try_files $uri $uri/ /index.html; |g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]