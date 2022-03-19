FROM node:16.9.1-alpine as node

WORKDIR /app
COPY nginx.conf .
COPY build/ .

#RUN yarn install
#RUN yarn run build

#nginx
FROM nginx:stable-alpine
COPY --from=node /app/build /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 7776
CMD ["nginx", "-g", "daemon off;"]
