migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fhvla0mj4pkiz37")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwvlqx9e",
    "name": "gallery",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 52242880,
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
  collection.schema.removeField("zwvlqx9e")

  return dao.saveCollection(collection)
})
