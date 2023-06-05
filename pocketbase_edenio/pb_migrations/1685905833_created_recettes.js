migrate((db) => {
  const collection = new Collection({
    "id": "kmozr3pow5enbn5",
    "created": "2023-06-04 19:10:33.106Z",
    "updated": "2023-06-04 19:10:33.106Z",
    "name": "recettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dbpnnv9w",
        "name": "field",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "7kvrgiof",
        "name": "titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q5hxyqyf",
        "name": "heure",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kmozr3pow5enbn5");

  return dao.deleteCollection(collection);
})
