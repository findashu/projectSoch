module.exports.index = (req, res) => {
  res.render("index", {
    title: "Home"
  });
};

// module.exports.alterationdetails = (req, res) => {
//   res.render("alteration/alterationdetails", {
//     title: "Alteration Bill Details"
//   });
// };

module.exports.chat = (req, res) => {
  res.render("chat", {
    title: "Chat"
  });
};
