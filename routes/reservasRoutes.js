const express = require('express');
const {
  createReserva,
  getReservas,
  getReservaById,
  updateReserva,
  deleteReserva,
  filterReservasByHotel,
  filterReservasByDateRange,
  filterReservasByRoomType,
  filterReservasByStatus,
  filterReservasByNumHuespedes,
} = require('../controllers/reservasController');

const router = express.Router();

router.post('/', createReserva);
router.get('/', getReservas);
router.get('/:id', getReservaById);
router.put('/:id', updateReserva);
router.delete('/:id', deleteReserva);
router.get('/filter/hotel', filterReservasByHotel);
router.get('/filter/date', filterReservasByDateRange);
router.get('/filter/room', filterReservasByRoomType);
router.get('/filter/status', filterReservasByStatus);
router.get('/filter/num-huespedes', filterReservasByNumHuespedes);

module.exports = router;

