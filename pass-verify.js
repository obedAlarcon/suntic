const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword ='admin123';
    const hash='$2b$10$6d2P1nnrHeXChP5pcl48k.E0jUZrXaeFeJpFHggx/cT16rgai8sJK';
    const isMatch =await bcrypt.compare(myPassword, hash);
    console.log(isMatch);

}

verifyPassword();