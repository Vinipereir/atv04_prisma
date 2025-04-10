const prisma = require('../models/prismaClient');

const getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos.' });
  }
};

const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await prisma.course.findUnique({ where: { id: parseInt(id) } });
      if (!course) {
        return res.status(404).json({ error: 'Curso não encontrado.' });
      }
      res.json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar curso.' });
    }
  };

const createCourse = async (req, res) => {
  const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;
  try {
    const newCourse = await prisma.course.create({
      data: { title, instrument, level, duration, price, instructor, maxStudents },
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar curso.' });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: parseInt(id) },
      data: { title, instrument, level, duration, price, instructor, maxStudents },
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar curso.' });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.course.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar curso.' });
  }
};

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };