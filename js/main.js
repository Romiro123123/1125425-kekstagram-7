/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable semi */

const descriptions = [
  'Сфоткал на курорте', 
  'Это я на втором курсе', 
  'Это htmlacademy', 
  'это моя машина', 
  'девушка в бикини', 
  'кукурузник', 
  'мой завтрак', 
  'мой обед', 
  'мой ужин'
]

const names = [
  'Кирилл Храмков', 
  'Илон маск', 
  'Андрей Гайдулян', 
  'madk1d', 
  'Александр ФЛОМастеров', 
  'Тони старк', 
  'Фамилий Многозов',
  'Сидни Суини',
  '-_-',
  'Flow Seal'
]

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getUniqeId = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
}

const uniqeId = getUniqeId();

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
 
const getOneOrTwoMessages = () => {
  let firstMessage = getRandomElement(message);
  let secondMessage = firstMessage;
  if (getRandomInteger(1,2) === 1) return firstMessage;
  while (secondMessage === firstMessage)
    secondMessage = getRandomElement(message);
  return `${firstMessage} ${secondMessage}`;
}

const createComment = () => {
  return {
    id: uniqeId(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getOneOrTwoMessages(),
    name: getRandomElement(names)
  };
}

const createPhotoDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(0,30)}, createComment)
  };
}

const photoDescriptions = Array.from({length: 25}, (_, index) => createPhotoDescription(index + 1));

console.log(JSON.stringify(photoDescriptions, null, 2));