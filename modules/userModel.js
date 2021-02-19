var mongoose = require("../config/dbConnect")
    //tao bang du lieu
var Schema = mongoose.Schema
    //dinh nghia cac cot
var userSchema = new Schema({
        username: String,
        address: String,
        password: String,
        age: Number
    }, {
        collection: "db"
    })
    //dinh nghia ten bang
var userModel = mongoose.model("db", userSchema);

// //a) tim tuoi lon hon 25
// userModel.find({
//     age: {
//         $gt: 25
//     }
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

//b) Tìm tất cả document có tuổi từ 20 đến 30 (gợi ý dùng $and) 
// userModel.find({
//     $and: [{
//         age: {
//             $gt: 20
//         }
//     }, {
//         age: {
//             $lte: 30
//         }
//     }]
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// //c) Chèn thêm 1 document mới
// userModel.create({
//     username: "Yo",
//     password: "yoman",
//     age: 69,
//     address: "Dai hoc bon ba"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// //d) Hiển thị toàn bộ document

// userModel.find().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// //e) Tìm những người có address  ở HP

// userModel.find({
//     address: "HP"
// }).then((result) => {

//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// f)Tìm tất cả bản ghi có tên là ta hoặc tuổi nhỏ hơn 30 ($or và $lt)

// userModel.find({
//     $or: [{
//         username: "ta"
//     }, {
//         age: {
//             $lt: 30
//         }
//     }]
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


//g)Sắp xếp các document theo tuổi và theo tứ tự tăng dần (hàm sort())
// userModel.find().sort({
//     age: 1
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// //h) Tìm tất cả bản ghi có tuổi lớn 20 và 
// // sắp xếp các document đó theo thứ tự giảm dần ($gt và hàm sort())
// userModel.find().sort({
//     $and: [{
//         "age": -1
//     }, {
//         'age': {
//             $gt: 20
//         }
//     }]
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });
// // i) In ra 5 phần tử đầu của document
// userModel.find().limit(5).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// // j) In ra 3 document bắt đầu từ document thứ 5 (skip() và limit())
// userModel.find().skip(5).limit(3).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// //k)In ra các document có tên là thanh hoặc có tuổi nhỏ hơn 30 ($or và $lt)
// userModel.find({
//     $or: [{
//         username: "thanh"
//     }, {
//         age: {
//             $lt: 30
//         }
//     }]
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// // l)Tìm người có _id:”5e54dfe448afde5434ca75b9” và
// //  cập nhật người đó thành username là “Thai Ha”
// userModel.findByIdAndUpdate({
//     _id: "5e54dfe448afde5434ca75b9"
// }, {
//     username: "Thai Ha Ha Ha"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// m) Tìm người có _id:”5e54dfd1ae8eac34d01da3bf” 
// và cập nhật người đó thành username là “Bac Ho”( updateOne)	
// userModel.updateOne({
//     _id: "5e54dfd1ae8eac34d01da3bf"
// }, {
//     username: "Bac Ho"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// //m) Xóa người có _id:”5e54e012d276b72fd4246734” 
// userModel.deleteOne({
//     _id: "5e54e012d276b72fd4246734"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// //n) Tìm những người có cùng quê HP và cập nhật password của họ thành 1234
// userModel.updateMany({
//     address: "HP"
// }, {
//     password: 1234
// }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });



// // Tìm những người có cùng quê HP và cập nhật tuổi của 1 người đầu tiên thành 1000

// userModel.updateOne({
//     address: "HP"
// }, {
//     age: 1000
// }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// });


//Tìm người đầu tiên có mật khẩu là 1234

userModel.findOne({
    password: 1234
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});