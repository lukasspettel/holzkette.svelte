migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ajalhui",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qs3ipeqw",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  // remove
  collection.schema.removeField("5ajalhui")

  // remove
  collection.schema.removeField("qs3ipeqw")

  return dao.saveCollection(collection)
})
