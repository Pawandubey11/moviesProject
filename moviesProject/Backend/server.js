


// import dotenv from "dotenv";
// dotenv.config(); // Must be at the very top
// // import { stripeWebhooks } from "./server/controllers/stripeWebhooks.js";
// // app.use('/api/stripe',express.raw({type:'application/json'}),stripeWebhooks)

// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// // import dotenv from "dotenv";
// import { clerkMiddleware } from "@clerk/express";
// import { serve } from "inngest/express";

// // DB + Inngest
// import connectDB from "./server/config/db.js";
// import { inngest, functions } from "./server/inngest/index.js";

// // Routes
// import showRouter from "./server/router/showRoutes.js";

// import bookingRouter from "./server/router/bookingRouter.js";
// // import adminRouter from "./server/router/adminRouter.js";
// import userRouter from "./server/router/userRouter.js";


// // dotenv.config();
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(clerkMiddleware());

// // Inngest route
// app.use("/api/inngest", serve({ client: inngest, functions }));

// // API routes
// app.get("/", (req, res) => {
//   res.send("🎬 Hello, welcome to the Movies API!");
// });

// app.use("/api/shows", showRouter);
// app.use("/api/bookings", bookingRouter);
// app.use("/api/user", userRouter);
// // app.use("/api/admin", adminRouter); // enable if needed

// const PORT = process.env.PORT || 5000;

// // ✅ Connect DB first, then start server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Failed to connect to DB:", err);
//   });




import dotenv from "dotenv";
dotenv.config(); // Always first so env vars are available

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";

import connectDB from "./server/config/db.js";
import { inngest, functions } from "./server/inngest/index.js";

import showRouter from "./server/router/showRoutes.js";
import bookingRouter from "./server/router/bookingRouter.js";
import userRouter from "./server/router/userRouter.js";
import { stripeWebhooks } from "./server/controllers/stripeWebhooks.js";

const app = express();

/* ----------------- Stripe Webhook Route -----------------
   ⚠️ This must come BEFORE any body-parsing middleware
   (express.json or bodyParser) because Stripe needs the raw body.
---------------------------------------------------------- */
app.use(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);

/* ----------------- Other middleware ----------------- */
app.use(cors());
app.use(bodyParser.json());
app.use(clerkMiddleware());

/* ----------------- Inngest route ----------------- */
app.use("/api/inngest", serve({ client: inngest, functions }));

/* ----------------- API routes ----------------- */
app.get("/", (req, res) => {
  res.send("🎬 Hello, welcome to the Movies API!");
});
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/user", userRouter);
// app.use("/api/admin", adminRouter); // enable if needed

/* ----------------- Start server after DB connect ----------------- */
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
