migrate((db) => {
  const collection = new Collection({
    "id": "jxkrrwwfrt6awmn",
    "created": "2023-06-04 09:12:27.896Z",
    "updated": "2023-06-04 09:12:27.896Z",
    "name": "glossaire",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "awzrik8i",
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
        "id": "9mbebag8",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("jxkrrwwfrt6awmn");

  return dao.deleteCollection(collection);
})
