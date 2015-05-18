Gravity CMS Standard Edition
============================

This project is a CMS built on the Symfony2 Standard Edition development stack.

About Gravity
-------------

Gravity is aiming to be an enterprise CMS for Symfony2 implementations. For more information by what is meant by this,
please see the following blog post by Andy Thorne: http://www.andy-thorne.co.uk/blog/php/23-The-World-Needs-A-New-CMS.

Installation
============

1. Clone repository `git clone https://github.com/gravity-cms/symfony-standard`
2. Install composer deps: `composer install`
3. Install assets:
    - `npm install` (requires nodejs and npm)
    - `bower install`
    - `bundle install` (requires ruby and bundle gem)
4. Create the database `./app/console doctrine:database:create` and `./app/console doctrine:schema:create`
5. Create your admin user: `php app/console -e=dev fos:user:create username email@address.com pa$$w0rd --super-admin`
6. Navigate to `/admin/cms/` to login and get started

Documentation
=============

GravityCMS is build with developers in mind by keeping the code simple. Configuration is YAML based 
(see app/config/config.yml) for version-able structure.

This project is a work in progress, and as such documentation is being written as and when we finalise the structures.
