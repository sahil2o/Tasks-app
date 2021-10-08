const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/create', taskController.task_create_get );

router.get('/', taskController.task_index);

router.post('/', taskController.task_create_post);

router.get('/:id',taskController.task_details);

router.put('/:id',taskController.task_put);

router.delete('/:id',taskController.task_delete);

module.exports = router;