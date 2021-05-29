const express = require('express');
const router = express.Router();

const service = require('../services/teacher-service')

/* GET movies listing. */
router.get('/', async function(req, res, next) {
  const allTeachers = await service.getAllTeachers();
  res.send(allTeachers);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newTeacher = req.body; 
  const createdTeacher = await service.createTeacher(newTeacher);
  res.status(201).send(createdTeacher);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  const teacher = await service.getTeacherById(teacherId)
  res.send(teacher);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  await service.deleteTeacher(teacherId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  let teacherToBeUpdated = req.body;
  let updatedTeacher = await service.updateTeacher(teacherId, teacherToBeUpdated);
  res.status(200).send(updatedTeacher);
});

module.exports = router;