###DATABASE SETUP
npm install --save @nestjs/typeorm

npm install --save typeorm

npm install --save pg

npx typeorm migration:create -n ArticleTable

docker run -d --name db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ez_db -p 5432:5432 postgres:13
