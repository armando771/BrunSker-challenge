const UserServices = require('../services/users');

const getAllUsers = async (_request, response) => {
  const users = await UserServices.getAllUsers();
  response.status(200).json(users);
};

const getUsersById = async (request, response) => {
  const { id } = request.params;

  const user = await UserServices.getUsersById(id);

  if (!user) return response.status(404).json({ message: 'Usuário não encontrado' });
  response.status(200).json(user);

};

const createNewUser = async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  const newUser = await UserServices.createNewUser(firstName, lastName, email, password);

  response.status(200).json(newUser);
};

const updateUser = async (request, response) => {
  const { id } = request.params;
  const { firstName, lastName, email, password } = request.body;

  const updateUser = await UserServices.updateUser(id, firstName, lastName, email, password);

  if(!updateUser) return response.status(404).json({ message: 'Usuário não encontrado' });

  const attUser = await UserServices.getUsersById(id);

  return response.status(200).json(attUser);

};

// const deleteUserById = async (request, response) => {
//   const { id } = request.params;

//   await UserServices.deleteUserById(id);

//   return response.status(200).json({ message: 'Usuário excluído com sucesso!' });
// };

module.exports = { getAllUsers, getUsersById, createNewUser, updateUser };
