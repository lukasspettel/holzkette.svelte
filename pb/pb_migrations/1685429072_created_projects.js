migrate((db) => {
  const collection = new Collection({
    "id": "o753bu728fdx9ym",
    "created": "2023-05-30 06:44:32.769Z",
    "updated": "2023-05-30 06:44:32.769Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b1k2thcj",
        "name": "slug",
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
  const collection = dao.findCollectionByNameOrId("o753bu728fdx9ym");

  return dao.deleteCollection(collection);
})
