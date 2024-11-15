let datas = [
    {"name":"Jan",
     "sale":112000},
    {"name":"Feb",
     "sale":120000},
    {"name":"Mar",
     "sale":90000},
    {"name":"Apr",
     "sale":123000},
    {"name":"May",
     "sale":83000},
    {"name":"Jun",
     "sale":105000},
    {"name":"Jul",
     "sale":111000},
    {"name":"Agu",
     "sale":112000},
    {"name":"Sep",
     "sale":115000},
    {"name":"Oct",
     "sale":116000},
    {"name":"Nov",
     "sale":108000},
    {"name":"Dec",
     "sale":113000},
]

let newUsers = [
    {id:1,name: 'Erfan Eslamparast', skill:'Front-End Developer',imgSrc: './images/profile.jpg'},
    {id:2,name: 'Sina Alipour', skill:'Back-End Developer',imgSrc: './images/P2.jpg'},
    {id:3,name: 'Zahra Karimi', skill:'Designer',imgSrc: './images/P3.jpg'},
    {id:4,name: 'Milad Alavi', skill:'Hacker',imgSrc: './images/P4.jpg'}
]

let transactions = [
    {id:1,name: 'Erfan Eslamparast', date:'12 Jun 2022',amount:123,imgSrc: './images/profile.jpg',status:'Aprroved'},
    {id:2,name: 'Saeed Rezaei', date:'23 Jul 2023',amount:148,imgSrc: './images/P6.jpg',status:'Declined'},
    {id:3,name: 'Hamid Alizadeh ', date:'08 Agu 2022',amount:106,imgSrc: './images/P5.jpg',status:'Aprroved'},
    {id:4,name: 'Zahra Karimi', date:'1 Feb 2023',amount:134,imgSrc: './images/P3.jpg',status:'Pending'}]

let users =[
    {
        id: 1,
        username: 'Erfan Eslamparast',
        avatar: 'images/profile.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'erfan.eslamparast1376@gmail.com'
    },
    {
        id: 2,
        username: 'Saeed Rezaei',
        avatar: 'images/P6.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'Saeed@gmail.com'
    },
    {
        id: 3,
        username: 'Zahra Karimi',
        avatar: 'images/P3.jpg',
        status: 'active',
        transaction: '$98',
        email: 'Zahra Karimi@gmail.com'
    },
    {
        id: 4,
        username: 'Sina Alipour',
        avatar: 'images/P2.jpg',
        status: 'active',
        transaction: '$0',
        email: 'S.Alipour@gmail.com'
    },
    {
        id: 5,
        username: 'Milad Alavi',
        avatar: 'images/P4.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'mmm@gmail.com'
    }
]

let productsList = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 780
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 999
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 779
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export {datas,newUsers,transactions,users,productsList,productsData} 