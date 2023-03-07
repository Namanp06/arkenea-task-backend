// const path = require('path');
// const hash = require('random-hash'); 
// const multer = require("multer");


// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//     } else {
//     cb(null, false);
//     }
// };

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//     cb(null, path.join(__dirname, '../../uploads'));
//     },
//     filename: function(req, file, cb) {
//         let temp = file.originalname.split('.');
//         const filename = temp[0] + '-' + hash.generateHash({length: 5}) + '.' + temp[1]
//     cb(null, filename);
//     }
// });

// upload = multer({
//     storage: storage,
//     limits: {
//     fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });  