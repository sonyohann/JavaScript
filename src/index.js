const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  state: {
    information: {
      name,
      languages: [firstlanguage, secondlanguage]
    }
  },
  value
} = deepObject;

const extracted = {
  name,
  firstlanguage,
  secondlanguage,
  value
};

console.log(extracted);
