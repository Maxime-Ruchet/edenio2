migrate((db) => {
  const collection = new Collection({
    "id": "12bz8e4quklrhb4",
    "created": "2023-06-04 09:34:17.493Z",
    "updated": "2023-06-04 09:34:17.493Z",
    "name": "produits",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "04nalgmk",
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
        "id": "wpswgmde",
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
        "id": "tinbsnt0",
        "name": "prix",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("12bz8e4quklrhb4");

  return dao.deleteCollection(collection);
})
