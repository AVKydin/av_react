

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//     http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин
import Cars from "./components/Cars/Cars";

function App() {
  return (
    <div className="App">
          <Cars/>
    </div>
  );
}

export default App;
