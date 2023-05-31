migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // remove
  collection.schema.removeField("hhjydjck")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bpkiwbvamlkmom")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhjydjck",
    "name": "partners",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
