migrate((db) => {
  const collection = new Collection({
    "id": "6bpkiwbvamlkmom",
    "created": "2023-05-31 07:50:33.193Z",
    "updated": "2023-05-31 07:50:33.193Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rixptta9",
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
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom");

  return dao.deleteCollection(collection);
})
