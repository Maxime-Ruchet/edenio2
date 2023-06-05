migrate((db) => {
  const collection = new Collection({
    "id": "foovq4wy34exoea",
    "created": "2023-06-03 12:00:55.355Z",
    "updated": "2023-06-03 12:00:55.355Z",
    "name": "evenement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "svf4bdni",
        "name": "image",
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
        "id": "msqqi1ee",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "poaufjqb",
        "name": "heure",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("foovq4wy34exoea");

  return dao.deleteCollection(collection);
})
