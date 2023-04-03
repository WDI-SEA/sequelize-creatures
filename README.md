# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Sequelize Creatures

---

Your task is to create a `dinosuars` model and `creatures` model using [sequelize](https://sequelize.org/docs/v6/), and perform an example of each `CRUD` action on them.

## Getting Started

* fork and clone this repo
* `cd sequelize-creatures`
* set this repo up for npm modules _don't forget to .gitignore node_modules!_
* install the required packages: `sequelize` and `pg`
* touch an entry point `.js` file
* [Set up](https://gasei.gitbook.io/sei/05-node-express/express-sequelize/03setup) this project to use sequelize

## Models

You will need to create two models: one for `dinos` and one for `creatures`:

### Dino model

| column name | type |
|:-----------:|:----:|
|id | integer |
|name | text |
|type | text |

### Creature model

| column name | type |
|:-----------:|:----:|
|id | integer |
|img_url | text |
|type | text |

* Use the [sequelize cli](https://gasei.gitbook.io/sei/05-node-express/express-sequelize/03setup#create-a-model-and-a-matching-migration) to generate the above models.
* after your models are created, don't forget to migrate them! 

## Model CRUD

Write an example of a `CRUD` action on each model in your entry point `.js` file. Include examples of:

* `CREATE, READ, UPDATE`, and `DESTROY`  a dino
* `CREATE, READ, UPDATE`, and `DESTROY` a creature

Checkout the [gitbook notes](https://gasei.gitbook.io/sei/05-node-express/express-sequelize/usingmodels-async-await) on sequelize model queries for more info!

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
