FROM node:22-alpine AS build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

# # Install "vi" editor for inspection
# RUN apt-get update && apt-get install -y vim

COPY --from=build /app/dist /usr/share/nginx/html/ng-workspace

COPY ./nginx-docker.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]