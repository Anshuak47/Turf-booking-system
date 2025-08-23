import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const showbooking = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, "show booking router"));
});

export { showbooking };
