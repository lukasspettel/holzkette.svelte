migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xav8zxc3mzkhomc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etwmzj1i",
    "name": "role",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Projektpartner",
        "Foerderpartner",
        "Pilotbetriebe"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xav8zxc3mzkhomc")

  // remove
  collection.schema.removeField("etwmzj1i")

  return dao.saveCollection(collection)
})
