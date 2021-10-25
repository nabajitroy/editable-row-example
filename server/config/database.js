/* module.exports = {
  hrPool: {
    user: 'hr',
    password: 'admin',
    connectString: 'localhost/XE',
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};*/
 
module.exports = {
  dbPool: {
    user:   process.env.DB_USER ,
    password:  process.env.DB_PASSWORD ,
    connectString:  process.env.DB_HOST ,
    poolMin:  +process.env.POOL_MIN ,
    poolMax:  +process.env.POOL_MAX ,
    poolIncrement:  +process.env.POOL_INCREMENT 
  }
};
 