// import mongoose from "mongoose";

// type ConnectionObject = {
//     isConnected?: number
// }
// const connection: ConnectionObject = {};

// async function dbConnect(): Promise<void> {
//     if (connection.isConnected) {
//         console.log('already connected to db');
//         return;
//     }
//     try {
//         const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
//         connection.isConnected = db.connections[0].readyState;
//         console.log('Connected to db');
//     } catch (error) {
//         console.log('db conection failed ', error);
//         process.exit();
//     }
// }

// export default dbConnect;

import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    // Check if already connected
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;
    }

    try {
        // Connect to MongoDB
        const dbUri = process.env.MONGODB_URI || '';
        if (!dbUri) {
            throw new Error('MONGODB_URI is not defined');
        }

        const db = await mongoose.connect(dbUri, { family: 4 });

        // Update connection state
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to the database');
    } catch (error) {
        // Improved error handling
        console.error('Database connection failed:', error);
        // Handle the error appropriately (e.g., retry connection, alert admin, etc.)
        throw new Error('Failed to connect to the database');
    }
}

export default dbConnect;
