const reservas = [];

// crear reserva
const createReserva = (req, res) => {
  const { hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, nombreCompleto, rut } = req.body;
  const nuevaReserva = { id: reservas.length + 1, hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, nombreCompleto, rut };
  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
};

// consultar lista de reservas
const getReservas = (req, res) => {
  res.status(200).json(reservas);
};

// consultar información de una reserva específica
const getReservaById = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (reserva) {
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// actualizar información de una reserva
const updateReserva = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (reserva) {
    const { hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, nombreCompleto, rut } = req.body;
    reserva.hotel = hotel || reserva.hotel;
    reserva.tipoHabitacion = tipoHabitacion || reserva.tipoHabitacion;
    reserva.numHuespedes = numHuespedes || reserva.numHuespedes;
    reserva.fechaInicio = fechaInicio || reserva.fechaInicio;
    reserva.fechaFin = fechaFin || reserva.fechaFin;
    reserva.nombreCompleto = nombreCompleto || reserva.nombreCompleto;
    reserva.rut = rut || reserva.rut;
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// eliminar una reserva especifica
const deleteReserva = (req, res) => {
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index !== -1) {
    const [deletedReserva] = reservas.splice(index, 1);
    res.status(200).json(deletedReserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// filtra reservas por hotel
const filterReservasByHotel = (req, res) => {
  const { hotel } = req.query;
  const filtered = reservas.filter(r => r.hotel === hotel);
  res.status(200).json(filtered);
};

// filtra reservas por rango de fechas
const filterReservasByDateRange = (req, res) => {
  const { fechaInicio, fechaFin } = req.query;
  const filtered = reservas.filter(r => r.fechaInicio >= fechaInicio && r.fechaFin <= fechaFin);
  res.status(200).json(filtered);
};

// filtra reservas por tipo de habitación
const filterReservasByRoomType = (req, res) => {
  const { tipoHabitacion } = req.query;
  const filtered = reservas.filter(r => r.tipoHabitacion === tipoHabitacion);
  res.status(200).json(filtered);
};

// filtra reservas por estado
const filterReservasByStatus = (req, res) => {
  const { estado } = req.query;
  const filtered = reservas.filter(r => r.estado === estado);
  res.status(200).json(filtered);
};

// filtra reservas por número de huéspedes
const filterReservasByNumHuespedes = (req, res) => {
  const { numHuespedes } = req.query;
  const filtered = reservas.filter(r => r.numHuespedes === parseInt(numHuespedes));
  res.status(200).json(filtered);
};

module.exports = {
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
};
