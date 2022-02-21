const contactSchima = require("../Modul/modul");
exports.postContact = async (req, resp) => {
  try {
    const contact = new contactSchima(req.body);
    const found = await contactSchima.findOne({ email: req.body.email });
    if (found) {
      return resp.status(400).send("this  email is used");
    }
    await contact.save();
    resp.status(200).send({ msg: "your contact is add", contact });
  } catch (error) {
    resp.status(500).send("can not add");
  }
};
exports.contactfind = async (req, resp) => {
  try {
    const contact = await contactSchima.find();
    resp.status(200).send({ msg: "your contact", contact });
  } catch (error) {
    resp.status(500).send("no have contact");
  }
};
exports.contactFindId = async (req, resp) => {
  try {
    const contact = await contactSchima.findById(req.params.id);
    resp.status(200).send({ msg: "search id is scc...", contact });
  } catch (error) {
    resp.status(500).send("the no contact");
  }
};
exports.contactUpdate = async (req, resp) => {
  try {
    const contact = await contactSchima.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    resp.status(200).send({ msg: "your contact is update", contact });
  } catch (error) {
    resp.status(500).send("your contact not update");
  }
};
exports.contactDelete = async (req, resp) => {
  try {
    const contact = await contactSchima.findByIdAndDelete(req.params.id);
    resp.status(200).send({ msg: "your contact is delete", contact });
  } catch (error) {
    resp.status(500).send("we can't delete");
  }
};
