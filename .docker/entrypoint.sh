#!/bin/bash

#On error no such file entrypoint.sh, execute in terminal - dos2unix .docker\entrypoint.sh

RUN usermod -u 1000 www-data

npm config set cache /var/www/.npm-cache --global
cd /var/www/frontend && npm install && cd ..

chown -R www-data:www-data .
cd backend
if [ ! -f ".env" ]; then
    cp .env.example .env
fi
if [! -f ".env.testing" ]; then
    cp .env.testing.example .env.testing
fi
composer install
php artisan key:generate
php artisan migrate

php-fpm
