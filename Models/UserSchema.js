const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    user_name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
      },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
    },

    address: {
      type: String,
    },

    password: {
        type: String,
      },


  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
