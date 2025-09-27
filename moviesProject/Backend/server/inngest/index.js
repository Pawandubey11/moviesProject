import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });






// Your new function:
const syncUserCreation = inngest.createFunction(
  { id: "movie-ticket-booking" },
  
    { event: "clerk/user.created" },
    async ({ event }) => {
        // This function will be called whenever a user is created in Clerk
        const {id,first_name, last_name, email_addresses, profile_image_url} = event.data;

        const userData = {
            _id: id,
            first_name,
            last_name,
            email: email_addresses[0]?.email_address,
            image : profile_image_url,
        };
        await User.create(userData);
        console.log("New user created:", userData); 
    }
);


//inngest function to delete user from db when user is deleted from clerk
const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
        { event: "clerk/user.deleted" },
    async ({ event }) => {
        // This function will be called whenever a user is deleted in Clerk
        const { id } = event.data;

        await User.deleteOne({ _id: id });
        console.log("User deleted:", id);
    }
);



//inngest functions update
const syncUserUpdate = inngest.createFunction(
    { id: "update-user-with-clerk" },
        { event: "clerk/user.updated" },
    async ({ event }) => {
        // This function will be called whenever a user is updated in Clerk
        const {id,first_name, last_name, email_addresses, profile_image_url} = event.data;

        const userData = {
            _id: id,
            first_name,
            last_name,
            email: email_addresses[0]?.email_address,
            image : profile_image_url,
        };
        await User.updateOne({ _id: id }, userData);
        console.log("User updated:", userData);
    }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation,syncUserDeletion,syncUserUpdate];
