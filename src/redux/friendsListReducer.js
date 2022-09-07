const initialValue = [
  { id: 'id1', name: 'Denis', imgSrc: 'https://e7.pngegg.com/pngimages/165/652/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png' },
  { id: 'id2', name: 'Vova', imgSrc: 'https://www.pngmart.com/files/21/Account-PNG-HD.png' },
  { id: 'id3', name: 'Lena', imgSrc: 'https://w7.pngwing.com/pngs/129/94/png-transparent-computer-icons-avatar-icon-design-male-teacher-face-heroes-logo.png' },
  { id: 'id4', name: 'Larisa', imgSrc: 'https://www.pngmart.com/files/10/Female-User-Account-PNG-HD.png' },
];

const actors = {
};

const friendsListReducer = (substate = initialValue, action) => {
  return actors[action.type]?.(substate, action) || substate;
};

export default friendsListReducer;