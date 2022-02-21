const express = require("express");
const {
  postContact,
  contactfind,
  contactFindId,
  contactUpdate,
  contactDelete,
} = require("../controlles/contact");
const route = express.Router();
route.post("/", postContact);
route.get("/", contactfind);
route.get("/:id", contactFindId);
route.put("/:id", contactUpdate);
route.delete("/:id", contactDelete);
module.exports = route;
