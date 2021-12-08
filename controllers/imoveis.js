const ImoveisServices = require('../services/imoveis');

const createNewImmobile = async (request, response) => {
  const { address, city, rooms, garage, price, type } = request.body;
  const newImmobile= await ImoveisServices.createNewImmobile(address, city, rooms, garage, price, type);

  response.status(200).json(newImmobile);
};

const getAllImmobiles = async (_request, response) => {
  const immobiles = await ImoveisServices.getAllImmobiles();
  response.status(200).json(immobiles);
};

const getImmobileById = async (request, response) => {
  const { id } = request.params;

  const immobile = await ImoveisServices.getImmobileById(id);

  if (!immobile) return response.status(404).json({ message: 'Imovel não encontrado' });
  response.status(200).json(immobile);

};

const updateImmobileById = async (request, response) => {
  const { id } = request.params;
  const { address, city, rooms, garage, price, type } = request.body;

  const updateUser = await ImoveisServices.updateImmobileById(id, address, city, rooms, garage, price, type);

  if(!updateUser) return response.status(404).json({ message: 'Imovel não encontrado' });

  const attImmobile = await ImoveisServices.getImmobileById(id);

  return response.status(200).json(attImmobile);

};

const deleteImmobileById = async (request, response) => {
  const { id } = request.params;

  await ImoveisServices.deleteImmobileById(id);

  return response.status(200).json({ message: 'Imovel excluído com sucesso!' });
};

module.exports = { createNewImmobile, getAllImmobiles, getImmobileById, updateImmobileById, deleteImmobileById }
