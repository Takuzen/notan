var admin = require("firebase-admin");

var serviceAccount = require("./notan-aefef-firebase-adminsdk-dspof-40322a2191.json");

// Initialize Firebase Admin SDK with credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore database instance
const db = admin.firestore();

// JSON data to be saved
/*
const jsonData = {
    user1: {
        notebooks: {
          note1: ['e.pdf', 'g.pdf'],
          note2: ['f.pdf', 'h.pdf'],
        },
        name: 'takuzen',
      },
  user2: {
    notebooks: {
      note1: ['a.pdf', 'c.pdf'],
      note2: ['b.pdf', 'd.pdf'],
    },
    name: 'Reishi',
  },
};
*/
const jsonData = {
        notebooks: {
          note1: ['e.pdf', 'g.pdf'],
          note2: ['f.pdf', 'h.pdf'],
        },
        name: 'sample 0',
      }


// Function to save JSON data to Firestore
async function saveDataToFirestore(data: any) {
  try {
    const docRef = db.collection('users').doc('sample_0');
    await docRef.set(data);
    console.log('Data saved to Firestore successfully!');
  } catch (error) {
    console.error('Error saving data to Firestore:', error);
  }
}

// Call the function to save the JSON data
saveDataToFirestore(jsonData);