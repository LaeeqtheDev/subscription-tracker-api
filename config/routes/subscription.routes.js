import { Router }from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req, res) => res.send({title: 'GET all subscriptions Endpoint'}));

subscriptionRouter.get('/:id',(req, res) => res.send({title: 'GET subscription by ID Endpoint'}));

subscriptionRouter.post('/',(req, res) => res.send({title: 'CREATE new subscription Endpoint'}));

subscriptionRouter.put('/:id',(req, res) => res.send({title: 'UPDATE subscription by ID Endpoint'}));

subscriptionRouter.delete('/:id',(req, res) => res.send({title: 'DELETE subscription by ID Endpoint'}));

subscriptionRouter.get('/user/:id',(req, res) => res.send({title: 'GET subscriptions by User ID Endpoint'}));

subscriptionRouter.put('/:id/cancel',(req, res) => res.send({title: 'CANCEL subscription by ID Endpoint'}));

subscriptionRouter.get('/upcoming-renewels',(req, res) => res.send({title: 'GET upcoming renewals Endpoint'}));

export default subscriptionRouter;