FROM mysql
ENV MYSQL_ROOT_PASSWORD "root"
ENV MYSQL_DATABASE "Bookdb"
COPY db.sql /docker-entrypoint-initdb.d

EXPOSE 3306