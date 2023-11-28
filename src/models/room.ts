import mongoose,{ Schema } from "mongoose";

const roomSchema:Schema = new Schema ({
    name:{
        type: String,
        required:[true, "Please enter room name"],
        trim:true,
        maxlength: [200,"Room name must not exceed 100 characters"]
    },
    description:{
        type: String,
        required: [true, "Please enter description"],
    },
    pricePerNight:{
        type: Number,
        required: [true, "Please enter price per night"],
        default:0.0
    },
    address:{
        type: String,
        required: [true, "Please enter room address"],
    },
    location:{
        type: {
            type: String,
            enum: ["Point"],
          },
          coordinates: {
            type: [Number],
            index: "2dsphere",
          },
          formattedAddress: String,
          city: String,
          state: String,
          zipCode: String,
          country: String,
    },
    guestCapacity: {
        type: Number,
        required: [true, "Please enter room guest capacity"],
      },
      numOfBeds: {
        type: Number,
        required: [true, "Please enter number of beds in room"],
      },
      isInternet: {
        type: Boolean,
        default: false,
      },
      isBreakfast: {
        type: Boolean,
        default: false,
      },
      isAirConditioned: {
        type: Boolean,
        default: false,
      },
      isPetsAllowed: {
        type: Boolean,
        default: false,
      },
      isRoomCleaning: {
        type: Boolean,
        default: false,
      },
      ratings: {
        type: Number,
        default: 0,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      category: {
        type: String,
        required: [true, "Please enter room category"],
        enum: {
          values: ["King", "Single", "Twins"],
          message: "Please select correct category for room",
        },
      },
      reviews: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

