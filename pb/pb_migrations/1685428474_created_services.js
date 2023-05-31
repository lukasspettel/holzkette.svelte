migrate((db) => {
  const collection = new Collection({
    "id": "yh5zemr4c1xl47g",
    "created": "2023-05-30 06:34:34.223Z",
    "updated": "2023-05-30 06:34:34.223Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "blcma0lt",
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
  const collection = dao.findCollectionByNameOrId("yh5zemr4c1xl47g");

  return dao.deleteCollection(collection);
})
