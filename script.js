//Задание 1

function delay(data, ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(data), ms);
    })
}

delay('Vlad', 1000).then((data) => console.log("Hello!", data));

//Задание 2

async function getUserInfo() {
    return delay({name: 'Vic', age: 21, id: 1}, 1000);
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg';
    return delay((userInfo), 1000);
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return delay((userInfo), 1000);
}

async function getResult() { 
    let userInfo = await getUserInfo();
    let userAvatar = await getUserAvatar(userInfo);
    let userAdditionalInfo = await getUserAdditionalInfo(userAvatar);

    console.log(userAdditionalInfo);
}

getResult();

//Задание 3

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}
 
getInfo().catch((error) => console.error(error));