import { Router }from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req, res) => res.send({title: 'GET all subscriptions Endpoint'}));

subscriptionRouter.get('/:id',(req, res) => res.send({title: 'GET subscription by ID Endpoint'}));

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.put('/:id',(req, res) => res.send({title: 'UPDATE subscription by ID Endpoint'}));

subscriptionRouter.delete('/:id',(req, res) => res.send({title: 'DELETE subscription by ID Endpoint'}));

subscriptionRouter.get('/user/:id',authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req, res) => res.send({title: 'CANCEL subscription by ID Endpoint'}));

subscriptionRouter.get('/upcoming-renewels',(req, res) => res.send({title: 'GET upcoming renewals Endpoint'}));

export default subscriptionRouter;