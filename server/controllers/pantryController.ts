import { RequestHandler } from 'express'

import db from '../models/usersModels'

type PantryController = {
    getAllPantryItems: RequestHandler,
    addPantryItem: RequestHandler,
    editPantryItem: RequestHandler,
    deletePantryItem: RequestHandler
}

const pantryController:PantryController = {
    async getAllPantryItems(req, res, next) {
        const { accountId } = req.body
        try {
            if (!accountId) throw new Error('Insufficient information provided in body')
            const data = await db.query('SELECT * FROM pantry WHERE account_id = $1',[accountId])
            res.locals.pantry = data.rows
            next()
        } catch(err) {
            console.log(err)
            next(err)
        }
    },

    async addPantryItem(req, res, next) {
        const { accountId, ingredient, quantity } = req.body
        try {
            if (!accountId || !ingredient) throw new Error('Insufficient information provided in body')
            const data = await db.query(`
            INSERT INTO pantry (ingredient, quantity, account_id) 
            VALUES ($1,$2,$3)
            RETURNING *`,[ingredient, quantity, accountId])
            res.locals.pantry = data.rows
            next()
        } catch(err) {
            console.log(err)
            next(err)
        }
    },

    async editPantryItem(req, res, next) {
        const { accountId, pantryId, ingredient, quantity } = req.body
        try {
            if (!accountId || !pantryId || !ingredient || !quantity) throw new Error ('Insufficient information provided in body')
            const data = await db.query(`
            UPDATE pantry 
            SET ingredient=$1, quantity=$2
            WHERE pantry_id=$3
            RETURNING *`,[ingredient, quantity, pantryId])
            res.locals.pantry = data.rows
            next()
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    async deletePantryItem(req, res, next) {
        const { accountId, pantryId } = req.body
        try {
            if (!accountId || !pantryId) throw new Error ('Insufficient information provided in body')
            const data = await db.query('DELETE FROM pantry WHERE pantry_id=$1 RETURNING *',[pantryId])
            res.locals.pantry = data.rows
            next()
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

export default pantryController
