import cloudinary from "../lib/cloudinary.js";
import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

export const getUserForSlideBar= async(req,res)=>{
    try {
        const loggedInUserId= req.user._id;
        const filteredUser= await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUser)
    } catch (error) {
        console.log("Error in getUserForSliderBar",error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChatId }, 
                { senderId: userToChatId, receiverId: myId } // ✅ Fixed the typo
            ]
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const sendMessage=async(req, res)=>{
    try {
        const {text,image}=req.body;
        const {id: receiverId}=req.params;
        const senderId=req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl= uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        //todo: realtime functionality goes her => socket.io

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error nin sendMessage controller",error.message);
        res.status(500).json({message:"Internal server Error"});
    }
}