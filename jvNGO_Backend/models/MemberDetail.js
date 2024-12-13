const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherHusbandName: { type: String, required: true },
    martialStatus: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    bloodGroup: { type: String, required: true },
    fullAddress: { type: String, required: true },
    villageWard: { type: String, required: true },
    panchayatNagarParishadName: { type: String, required: true },
    block: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    country: { type: String, required: true },
    mobile: { type: String, required: true },
    qualification: { type: String, required: true },
    occupation: { type: String, required: true },
},{
    collection: "MemberInfo",
}
)


module.exports = mongoose.model("MemberInfo", MemberSchema);