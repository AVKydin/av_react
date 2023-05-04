const baseUrlJson = 'https://jsonplaceholder.typicode.com';

const baseUrlCars = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars'
const urls={
    users: '/users',
    comments: '/comments',
    cars:{
        cars,
        byId:(id)=>`${cars}/${id}`
    }
}


export {
    baseUrlCars,
    baseUrlJson,
    urls,
}