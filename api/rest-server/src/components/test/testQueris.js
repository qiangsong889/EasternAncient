import { testQueriString } from './testQuerisHelper';
// import db here
// import db from '../../config/database/SQL';

export const testQueris = async body => {
  try {
    const testString = testQueriString(body);
    // interaction with database this is an example
    // const queryString = await signUpHelper();
    // const data = await db.queryAsync(queryString, [
    //   body.email,
    //   body.username,
    //   body.password
    // ]);
    return testString;
  } catch (err) {
    console.log('err in testQuerys', err);
  }
};
