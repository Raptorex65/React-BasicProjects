const express = require('express');
const router = express.Router();

const service = require('../services/enrollment-service.js')

/* GET movies listing. */
router.get('/', async function(req, res, next) {
  const allEnrollments = await service.getAllEnrolls();
  res.send(allEnrollments);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newEnrollment = req.body; 
  const createdEnrollment = await service.createEnroll(newEnrollment);
  res.status(201).send(createdEnrollment);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  const enrollment = await service.getEnrollById(enrollmentId)
  res.send(enrollment);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  await service.deleteEnroll(enrollmentId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  let enrollmentToBeUpdated = req.body;
  let updatedEnrollment = await service.updateEnroll(enrollmentId, enrollmentToBeUpdated);
  res.status(200).send(updatedEnrollment);
});

module.exports = router;