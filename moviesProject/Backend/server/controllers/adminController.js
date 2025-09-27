import Booking from "../models/booking.js";
import Show from "../models/show.js";
import User from "../models/user.js"; // assuming you have a User model

// Check if user is admin
export const checkAdmin = async (req, res) => {
  try {
    const { user } = req; // assuming Clerk/your auth attaches user
    if (!user || !user.isAdmin) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }
    return res.json({ success: true, message: "User is admin" });
  } catch (error) {
    console.error("Error checking admin:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const totalRevenueAgg = await Booking.aggregate([
      { $match: { isPaid: true } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const totalRevenue = totalRevenueAgg[0]?.total || 0;

    const totalUsers = await User.countDocuments();
    const activeShows = await Show.countDocuments({ isActive: true });

    res.json({
      success: true,
      stats: {
        totalBookings,
        totalRevenue,
        totalUsers,
        activeShows,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all shows
export const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find().populate("movie");
    res.json({ success: true, shows });
  } catch (error) {
    console.error("Error fetching shows:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("show");
    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
