migrate((db) => {
  const collection = new Collection({
    "id": "fhvla0mj4pkiz37",
    "created": "2023-05-30 06:44:57.320Z",
    "updated": "2023-05-30 06:44:57.320Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pyvbudzs",
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
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37");

  return dao.deleteCollection(collection);
})
