// // Challenge 1: მოცემულია სტრინგი: '{"id": 1, "product": "Laptop", "price": 1200}'.
// //     გადააქციეთ ის ობიექტად, დაამატეთ 20%-იანი ფასდაკლება და ისევ სტრინგად გადააქციეთ.
//
// const str='{"id": 1, "product": "Laptop", "price": 1200}';
// const object=JSON.parse(str);
// object.discount=20;
// console.log(object);
// const reStr=JSON.stringify(object);
// console.log(reStr);


// // Challenge 2: შექმენით "User Profile" ობიექტი, შეინახეთ ის ცვლადში JSON სტრინგად და სცადეთ მასში
// // არსებულ თვისებაზე წვდომა (სტუდენტმა უნდა დაინახოს, რომ სტრინგიდან .name არ იმუშავებს parse-ის გარეშე).
//
// const userProfile = {
//     name: "teo",
//     surname: "gotsiridze",
//     birthday: "18-11-1996",
//     age: "29"
// }
// console.log(userProfile.name);
// const userStr=JSON.stringify(userProfile);
// console.log(userStr);
// console.log(userStr.name);

// // დავალება 1: მოიძიეთ 3 საჯარო API (მაგ: Weather, Pokemon, Movies) და დაწერეთ მათი JSON სტრუქტურის აღწერა (რა ველებს აბრუნებენ).
//
// const weather = {
//     "location": {
//         "name": "Tbilisi",
//         "region": "Capital Region",
//         "country": "Georgia",
//         "lat": 41.72,
//         "lon": 44.78,
//         "tz_id": "Asia/Tbilisi",
//         "localtime": "2026-02-02 12:34"
//     },
//     "current": {
//         "last_updated": "2026-02-02 12:00",
//         "temp_c": 7.0,
//         "temp_f": 44.6,
//         "is_day": 1,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//             "code": 1003
//         },
//         "wind_kph": 10.8,
//         "humidity": 65,
//         "cloud": 50,
//         "feelslike_c": 5.0
//     }
// }
//
// // აბრუნებს: location (name,region,country,lat,lon,tz_id,localtime)
// //             current (last_updated,temp_c,temp_f,is_day,condition,wind_kph,humidity,cloud,feelslike_c)
// //             ველებს.
//
// const pokemon = {
//     "id": 25,
//     "name": "pikachu",
//     "base_experience": 112,
//     "height": 4,
//     "weight": 60,
//     "types": [
//         {
//             "slot": 1,
//             "type": {"name": "electric", "url": "..."}
//         }
//     ],
//     "abilities": [
//         {
//             "ability": {"name": "static", "url": "..."},
//             "is_hidden": false,
//             "slot": 1
//         }
//     ],
//     "stats": [
//         {
//             "base_stat": 35,
//             "effort": 0,
//             "stat": {"name": "speed", "url": "..."}
//         }
//     ],
//     "sprites": {
//         "front_default": "https://raw.githubusercontent.com/..."
//     }
// }
//
// //          აბრუნებს: id,name,base_experience,height,weight,types(ობიექტი მოიცავს slot,type),abilities(ობიექტი მოიცავს ability,is_hidden,slot),
// //          stats(ობიექტი მოიცავს base_stat,effort,stat),sprites(front_default) ველებს.
//
// const films={
//     "Search": [
//         {
//             "Title": "Batman Begins",
//             "Year": "2005",
//             "imdbID": "tt0372784",
//             "Type": "movie",
//             "Poster": "https://..."
//         },
//         {
//             "Title": "Batman v Superman: Dawn of Justice",
//             "Year": "2016",
//             "imdbID": "tt2975590",
//             "Type": "movie",
//             "Poster": "https://..."
//         }
//     ],
//     "totalResults": "123",
//     "Response": "True"
// }
//
// // მოიცავს Search მასივს ფილმების ობიექტებით (თითო ობიექტი მოიცავს Title,Year,imdbID,Type,Poster)
// //  totalResults /Response

// // დავალება 2: დაწერეთ კოდი, რომელიც ობიექტს user გადააქცევს JSON-ად, ოღონდ JSON.stringify-ში გამოიყენეთ მეორე პარამეტრი (replacer),
// //     რომ მხოლოდ email და username ველები დარჩეს.
//
// const user={
//     email : "teogotsiridze@yahoo.com",
//     username: "superwholock",
//     password: "123456"
// }
//
// const userStr = JSON.stringify(user, ["email", "username"]);
// console.log(userStr);

// // 1. "პერსონალური ბიბლიოთეკა" (JSON Creation & Stringify)
// // პირობა: შექმენით ობიექტი myLibrary, რომელიც შეიცავს:
// //     owner: თქვენი სახელი.
// //     books: მასივი, სადაც იქნება მინიმუმ 3 ობიექტი (თითოეულს ექნება title, author და isRead ბულიანი).
// //     address: ობიექტი (city, street).
// //
// //         დავალება:გადააქციეთ ეს ობიექტი JSON სტრინგად.დაბეჭდეთ კონსოლში მიღებული სტრინგის სიგრძე (.length).
//
// const myLibrary = {
//     owner: "teo",
//     books:[
//         {
//             title: "the lord of the rings",
//             author: "Tolkien",
//             isRead: true
//         },
//         {
//             title: "the hobbit",
//             author: "Tolkien",
//             isRead: true
//         },
//         {
//             title: "the time machine",
//             author: "Wells",
//             isRead: false
//         }
//     ],
//     address: {
//         city: "Tbilisi",
//         street: "Pekini"
//     }
// }
//
// console.log(myLibrary);
// const myLibraryStr= JSON.stringify(myLibrary);
// console.log(myLibraryStr);
// console.log(myLibraryStr.length);
//
// // 2. "მონაცემთა აღდგენა" (Parsing)
// // პირობა: წარმოიდგინეთ, რომ სერვერიდან მიიღეთ შემდეგი ტექსტი:
// //     '{"status": "success", "data": {"count": 2, "users": [{"id": 1, "name": "დათო"}, {"id": 2, "name": "ლუკა"}]}}'
// // დავალება:
// //     გადააქციეთ ეს სტრინგი JavaScript ობიექტად.
// //     გამოიტანეთ კონსოლში მხოლოდ მომხმარებლების მასივი (users).
// //     დაამატეთ ამ მასივში ახალი მომხმარებელი: { "id": 3, "name": "თქვენი სახელი" }.
// // განახლებული ობიექტი ისევ გადააქციეთ JSON სტრინგად.
//
// const text = '{"status": "success", "data": {"count": 2, "users": [{"id": 1, "name": "დათო"}, {"id": 2, "name": "ლუკა"}]}}'
// const object = JSON.parse(text);
// console.log(object.data.users);
// object.data.users.push({"id": 3, "name": "თქვენი სახელი"});
// console.log(object.data.users);
// const objectString = JSON.stringify(object);
// console.log(objectString);

// // 3. "კრიტიკული შეცდომა" (Error Handling)
// // დავალება:
// // შექმენით არავალიდური JSON სტრინგი (მაგალითად, სადაც ბრჭყალები აკლია: '{"name": ნიკა}').
// // სცადეთ მისი გაპარსვა JSON.parse()-ით.
//
// const userInvalidJson = '{name: 'teo',"username": superwholock}'
// const  userText=JSON.parse(userInvalidJson);
// console.log(userText)

// // 4. "API Explorer" (Research)
// // დავალება:
// // შედით საიტზე: JSONPlaceholder - /todos.
// // დააკოპირეთ პირველი 5 ობიექტი.
// //დაწერეთ კოდი, რომელიც ამ მონაცემებიდან მხოლოდ იმ დავალებებს (todos) გამოიტანს, რომლებიც დასრულებულია (completed: true).
// //
//
// const todos = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     }
// ]
//
// const filteredTodos = todos.filter(todo => todo.completed === true);
// console.log(filteredTodos);

