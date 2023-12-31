FROM node:lts

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENV VITE_APP_BASE_URL=https://backend-production-c017.up.railway.app/
ENV VITE_APP_BASE_API_URL=https://backend-production-c017.up.railway.app/api

# build app for production with minification
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]