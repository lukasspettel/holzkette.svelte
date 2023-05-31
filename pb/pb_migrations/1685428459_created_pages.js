migrate((db) => {
  const collection = new Collection({
    "id": "5cfeef776xk3m8d",
    "created": "2023-05-30 06:34:19.521Z",
    "updated": "2023-05-30 06:34:19.521Z",
    "name": "pages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dnq5eyfh",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("5cfeef776xk3m8d");

  return dao.deleteCollection(collection);
})
