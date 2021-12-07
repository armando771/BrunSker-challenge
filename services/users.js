const { User, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ attributes: ['firstName', 'lastName', 'id', 'email', 'createdAt', 'updatedAt' ] });

    return users;

  } catch (e) {
    console.log(e.message);
  }
};

const getUsersById = async (id) => {
    try {
      const user = await User.findByPk(id, { attributes: ['firstName', 'lastName', 'id', 'email', 'createdAt', 'updatedAt' ] });

      return user;

    } catch (e) {
      console.log(e.message);
    }
  }

const createNewUser = async (firstName, lastName, email, password) => {
  try {
    const newUser = await User.create({ firstName, lastName, email, password });

    return newUser;
  
  } catch (e) {
    console.log(e.message)
  }
}

const updateUser = async (id, firstName, lastName, email, password) => {
  try {
    const [updateUser] =
    await User.update({ firstName, email, lastName, password }, { where: { id } });

    return updateUser;

  } catch (e) {
    console.log(e.message);
  }
}

// const deleteUserById = async (id) => {
//   try {
//     const deleteUser = await User.destroy({ where: { id } } );

//     return deleteUser;

//   } catch (e) {
//     console.log(e.message);
//   }
// }

const getUserByEmail = async (email) => {
  try {
    const user = await sequelize.query(`SELECT email, password FROM Users WHERE email = '${email}'`, { type: QueryTypes.SELECT });
    return user;
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getAllUsers, getUsersById, createNewUser, updateUser, getUserByEmail };
