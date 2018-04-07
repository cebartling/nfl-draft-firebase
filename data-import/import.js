const admin = require("firebase-admin");
const fs = require('fs');
const serviceAccount = require("./service-account.json");

const fileName = process.argv[2];

// You should replae databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nfl-draft-64107.firebaseio.com"
});

const db = admin.firestore();

fs.readFile(fileName, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const dataArray = JSON.parse(data);
  updateCollection(dataArray).then(() => {
    console.log('Successfully imported collection!');
  })

});

async function updateCollection(dataArray) {
  for (let collection in dataArray) {
    if (dataArray.hasOwnProperty(collection)) {
      for (let doc in dataArray[collection]) {
        if (dataArray[collection].hasOwnProperty(doc)) {
          await startUploading(collection, doc, dataArray[collection][doc])
        }
      }
    }
  }
}

function startUploading(collectionName, document, data) {
  return new Promise((resolve, reject) => {
    db.collection(collectionName).doc(document)
      .set(data)
      .then(() => {
        console.log(`${document} was successfully added to Cloud Firestore!`);
        resolve('Data wrote!');
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  })
}
