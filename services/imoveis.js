const { Imovel, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');


const createNewImmobile = async (address, city, rooms, garage, price, type) => {
  try {
    const NewImmobile = await Imovel.create({ address, city, rooms, garage, price, type });

    
    return NewImmobile;
  
  } catch (e) {
    console.log(e.message)
  }
}

const getAllImmobiles = async () => {
  try {
    const Immobiles = await sequelize.query('SELECT * FROM Imovels');

    return Immobiles[0];

  } catch (e) {
    console.log(e.message);
  }
};

const getImmobileById = async (id) => {
    try {
      const Immobile = await sequelize.query(`SELECT * FROM Imovels WHERE id = ${id}`);
      if (!Immobile) return { message: 'Imovel não encontrado' }
      return Immobile[0];

    } catch (e) {
      console.log(e.message);
    }
  }

  const updateImmobileById = async (id, address, city, rooms, garage, price, type) => {
    try {
      const [updateImmobile] =
      await Imovel.update({ address, city, rooms, garage, price, type }, { where: { id } });
  
      return updateImmobile;
  
    } catch (e) {
      console.log(e.message);
    }
  }

  const deleteImmobileById = async (id) => {
  try {
    const deleteImmobile = await Imovel.destroy({ where: { id } } );

    return deleteImmobile;

  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { createNewImmobile, getAllImmobiles, getImmobileById, updateImmobileById, deleteImmobileById  }
