const users = [];
const rooms = [];

const createRoom = (roomId) => {
  rooms.push(roomId);
};

const roomDisclose = (roomId) => {
  const index = rooms.findIndex((room) => room === roomId);
  if (index !== -1) {
    return rooms.splice(index, 1)[0];
  }
};

const findRoom = (roomId) => {
  let value = rooms.find((room) => room === roomId);
  return value;
};

const userJoin = (userArr) => {
  //   const user = { roomId, userId, userName, host, meetingTitle, presenter };
  users.push(userArr);
  const roomUsers = getUsersInRoom(userArr.roomId);
  return roomUsers;
};

const userLeave = (userId) => {
  const index = users.findIndex((user) => user.id === userId);
  //user bhettiyena bhane -1 return hanxa index
  if (index !== -1) {
    //removed array return aauxa jasma yeuta matra element hunxa so returning it
    return users.splice(index, 1)[0];
  }
};

const getUsersInRoom = (roomId) => {
  const roomUsers = [];
  users.map((user) => {
    if (user.roomId === roomId) {
      roomUsers.push(user);
    }
  });
  return roomUsers;
};

module.exports = {
  findRoom,
  createRoom,
  roomDisclose,
  userJoin,
  userLeave,
  getUsersInRoom,
};
