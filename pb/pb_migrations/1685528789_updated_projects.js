migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bouerhn7",
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
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // remove
  collection.schema.removeField("bouerhn7")

  return dao.saveCollection(collection)
})
