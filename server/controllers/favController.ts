import { RequestHandler } from 'express'

import db from '../models/usersModels'


type FavController = {
    getFavsByAccountId: RequestHandler,
    addFavById: RequestHandler,
    deleteFavById: RequestHandler
}

const favController:FavController = {
    async getFavsByAccountId(req, res, next) {
        const { accountId } = req.body
        try {
            if (!accountId) throw new Error('Insufficient information provided in body')
            const data = await db.query('SELECT * FROM favorite WHERE favorite_id = $1',[accountId])
            res.locals.favorites = data.rows
            next()
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    async addFavById(req, res, next) {
        const { recipeId, accountId } = req.body
        try {
            if (!accountId || !recipeId) throw new Error('Insufficient information provided in body')
            const data = await db.query('INSERT INTO favorite (recipe, account_id) VALUES ($1, $2) RETURNING *',[recipeId, accountId])
            res.locals.favorites = data.rows
            next()
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    async deleteFavById(req, res, next) {
        const { favoriteId } = req.body
        try {
            if (!favoriteId) throw new Error ('Insufficient information provided in body')
            const data = await db.query('DELETE FROM favorite WHERE favorite_id=$1 RETURNING *',[favoriteId])
            res.locals.favorites = data.rows
            next()
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

export default favController