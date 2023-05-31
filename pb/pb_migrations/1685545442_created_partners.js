migrate((db) => {
  const collection = new Collection({
    "id": "xav8zxc3mzkhomc",
    "created": "2023-05-31 15:04:02.166Z",
    "updated": "2023-05-31 15:04:02.166Z",
    "name": "partners",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rqaiccqu",
        "name": "name",
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
        "id": "tmujmiwt",
        "name": "logo",
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
        "id": "63c9fxaq",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("xav8zxc3mzkhomc");

  return dao.deleteCollection(collection);
})
