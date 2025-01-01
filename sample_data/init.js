// File: init.js
// Import tất cả các file JSON vào database "medical"

db = db.getSiblingDB("medical"); // Chuyển sang database "medical"
db.createUser({
    user: "root",
    pwd: "example",
    roles: [{ role: "readWrite", db: "medical" }]
  });
// Import từng file JSON vào các collection tương ứng
db.appointments.insertMany(require('/docker-entrypoint-initdb.d/appointments.json'));
db.chats.insertMany(require('/docker-entrypoint-initdb.d/chats.json'));
db.conversations.insertMany(require('/docker-entrypoint-initdb.d/conversations.json'));
db.medicalrecords.insertMany(require('/docker-entrypoint-initdb.d/medicalrecords.json'));
db.medicines.insertMany(require('/docker-entrypoint-initdb.d/medicines.json'));
db.meetings.insertMany(require('/docker-entrypoint-initdb.d/meetings.json'));
db.orders.insertMany(require('/docker-entrypoint-initdb.d/orders.json'));
db.users.insertMany(require('/docker-entrypoint-initdb.d/users.json'));
