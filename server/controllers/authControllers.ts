const bcrypt = require('bcrypt');
import db from '../models/usersModels';
import {RequestHandler} from 'express';
import {Request, Response, NextFunction} from 'express';

type authController = {
  postLogin: RequestHandler;
  signUp: RequestHandler;
};
const authController = {
  async postLogin(req, res, next) {
    console.log('Login received');
    const {email, password} = req.body;
    // console.log(req.body);
    console.log(email, password);

    try {
      if (!email || !password) {
        res.locals.loggedIn = 'Rejected';
        return next();
      } else {
        const queryStr = `SELECT * FROM account WHERE email = $1;`;
        // check database
        const result = await db.query(queryStr, [email]);
        if (result.rows.length > 0) {
          const hashPassword = result.rows[0].password;
          if (bcrypt.compareSync(password, hashPassword)) {
            res.locals.loggedIn = 'Verified';
            console.log('Successful Login');
            return next();
          } else {
            res.locals.loggedIn = 'Rejected';
          }
          return next();
        } else {
          res.locals.loggedIn = 'Rejected';
        }
        return next();
      }
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  async signUp(req, res, next) {
    const {username, password, email} = req.body;

    const available = `SELECT username
  FROM account
  WHERE username = $1`;

    const userlogin = `INSERT INTO account (username, password, email)
  VALUES ($1, $2, $3)
  RETURNING account_id`;

    const usersQuery = `INSERT INTO account (account_id, email)
  VALUES ($1, $2)`;

    const input = [username, password, email];

    // BCRYPT
    try {
      // Verify if all info entered
      if (username && password && email) {
        res.locals.signUp = 'Success';
        // Check if username is available
        const result = await db.query(available, [username]);
        if (result.rows.length === 0) {
          console.log('Account is available');
          console.log('result', result);
          // Hash password
          const salt = await bcrypt.genSalt();
          const securePassword = await bcrypt.hash(password, salt);
          console.log(password, securePassword);
          const hashed = await db.query(userlogin, [
            username,
            securePassword,
            email,
          ]);
          console.log(hashed);
          // Store in locals for frontend
          // res.locals.userID = hashed.rows[0].account_id;
          res.locals.newUser = 'newUser';
          console.log('res.locals', res.locals.newUser);
          return next();
        }
      } else {
        // Store in locals for frontend
        res.locals.newUser = 'Rejected';
        return next();
      }
    } catch (err) {
      console.log('auth error', err);
      return next(err);
    }
  },

  async check(req, res, next) {
    try {
      const query = `SELECT * FROM account`;
      const data = await db.query(query, null);
      console.log(data);
      return next();
    } catch (error) {
      console.log('check', error);
      return next(error);
    }
  },
};

export default authController;
