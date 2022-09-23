import User from "../model/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";



export const createUser = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) return res.status(400).json( "User already exist" )

    const savedUser = await newUser.save();

    const accessToken = jwt.sign(
        {
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "1h" }
    );

    const { password, ...others } = savedUser._doc;

    res.status(201).json({ ...others, accessToken })

    

}





export const loginUser = async (req, res) => {


    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json("User does not exist")

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) return res.status(401).json("Wrong password");

    const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "1h" }
    );

    const { password, ...others } = user._doc;

    res.status(201).json({ ...others, accessToken })




}