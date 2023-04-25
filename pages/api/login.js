
import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body)
    let user = await User.findOne({ "email": req.body.email })

    const bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      // console.log(user.password)
      // console.log(decryptedData)
      if (req.body.email == user.email && req.body.password == decryptedData) {

        var token = jwt.sign({ eamil: user.email, name: user.name }, 'jwtsecret', { expiresIn: "2d" });
        res.status(200).json({ success: true, token })
      } else {
        res.status(200).json({ success: false, error: "Invailid Credentials" })

      }
    } else  {
      res.status(200).json({ success: false, error: "No User found!" })
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" })

  }

}



export default connectDb(handler)