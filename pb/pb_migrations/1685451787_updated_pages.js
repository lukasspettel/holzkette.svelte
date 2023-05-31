migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8uadufabyl9lhsy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afvaw9m9",
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
  const collection = dao.findCollectionByNameOrId("8uadufabyl9lhsy")

  // remove
  collection.schema.removeField("afvaw9m9")

  return dao.saveCollection(collection)
})
