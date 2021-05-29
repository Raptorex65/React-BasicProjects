const express = require('express');
const router = express.Router();

const service = require('../services/student-service.js')

/* GET movies listing. */
router.get('/', async function(req, res, next) {
  const allStudents = await service.getAllStudents();
  res.send(allStudents);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newStudent = req.body; 
  const createdStudent = await service.createStudent(newStudent);
  res.status(201).send(createdStudent);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  const student = await service.getStudentById(studentId)
  res.send(student);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  await service.deleteStudent(studentId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  let studentToBeUpdated = req.body;
  let updatedStudent = await service.updateStudent(studentId, studentToBeUpdated);
  res.status(200).send(updatedStudent);
});

module.exports = router;