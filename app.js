//Example Object
const a = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori"
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that"
    }
  }
}

let ObjectPath = []




const ObjectSearchFn = (arr1, query) => {
  for (const [key, value] of Object.entries(arr1)) {
    if (typeof value === 'object') {
      ObjectPath.push(key)
      ObjectSearchFn(value, query)
    } else if (value === query) {
      ObjectPath.push(key)
      console.log(ObjectPath);
      return ObjectPath.join('.')
    } else {
      console.log('not found');
    }
  }
}


const arraySearchFn = (arr1, query) => {
  const resultValue = arr1.find((item, i) => item === query ? i : null)
  if (resultValue) {
    console.log(resultValue);
    return `${arr1}${[resultValue]}`
  }
}
export const pathGet = (arr1, query) => {
  if (Array.isArray(arr1)) {
    arraySearchFn(arr1, query)
  } else if (typeof arr1 === 'object') {
    console.log('is an object');
    const data = ObjectSearchFn(arr1, query)
    console.log(data);

  }
}
