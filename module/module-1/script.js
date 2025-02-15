// membuat alert hello world...
alert('hello world from script.js');

// variable...
var nama1 = 'zumal' //variable yang bisa berubah nilainnya
let nama3 = 'rama' //variable yang bisa berubah nilainnya
const nama2 = 'tarisa' // variable yang tidak bisa berubah nilainnya

// scoupe dari variable...
//jadi scoupe itu intinya setiap ada data yg diawali { dan diakhiri } , seperti daerah yang ditandai...
{
    var nama4 = 'rasya'
    let nama5 = 'farhan'
    const nama6 = 'rizal'
}
console.log(nama4);

// note : jika anda gunakan variable var dia tidak akan ada namanya konsep scoupe jadi dapat diakses dimana saja kalau anda akses variable yang let dan const mereka menggunakan konsep scoupe jadi jika kita console.log() diluar scoupe akan menghasilkan errornvariable tidak diketahui...

// tipe data (primitif)

/*
1. String
string merupakan tipe data text , cara membuatnya anda hanya perlu menambahkan '' / "" / `` anda hanya perlu memasukkan tulisan maupun angka kedalam , contoh var= 'zumal' , const = "120" , let = `true` ketiga contoh itu adalah tipe data string.
*/
const nama = 'Zumal'
const negara = 'indonesia'
const domisili = 'Makassar , Tamalate , Teluk Bone'
const kalimat = `Hallo nama saya ${nama} , saya dari ${negara} , tepatnya di ${domisili}`
console.log(`${kalimat} | ${typeof kalimat}`)

/*
2. Number
Number seperti namanya adlah tipe data angka , untuk membuatnya benar-benar sederhana anda hanya perlu menulis angka tanpa tanda '' / `` / "" contoh var = 1230.
*/
const umur = 22
console.log(umur + '|' + typeof umur)

/*
3. Boolean
Merupakaan tipe data yang hanya ada benar atau salah (true / false) biasanya digunakan saat pengkondisian.
*/
var pria = true
console.log(`${pria} | ${typeof pria}`)

/*
4. undefined
Merupakan tipe data kosongan , jadi jika ada variable yang tipenya undefined maka itu artinya variable itu kosong / tidak terdefinisi jadi klo anda membuat variable kosong akan bernilai undefined atau tidak terdefinisikan ,  berbeda dengan string kosong '' kalau anda menggunakan '' masih dianggap string, undefined merupakan tipe data unik dari javascript 
*/
let kosong = undefined
console.log(kosong  + '|' + typeof kosong)

/* 
5. null
Sama seperti undefined null ini merupakan tipe data yang unik , jika variable isinya null maka artinya kososng atau tidak ada nilai , berbeda dengan undefined biasanya variable yg nilainya null itu merupaan kesengajaan 
*/
let aa;
let a = null
console.log(typeof a) // ini akan menghasilkan object
console.log(typeof aa) // ini akan menghasilkan undefined

/*
6. Symbol 
Merupakan tipe data unik dari javascript
untuk yang akan datang
*/ 

/*
7. BigInt
merupakan tipe data number namun lebih  besar dari number
*/ 
let aaa = 716283712368217312863173621731283217318n
console.log(aaa + '|' + typeof aaa)

// tipe data references
/* 
1. Array
diibaratkan variable yang mengandung banyak data , dan memiliki dan ditandai dengan angka , dimulai dari 0, cara membuatnya dengan [].
*/
let arr = ['zumal' , 'tarisa' , 'clara']
console.log(arr)

/* 
2. Object
Sama seperti array object indexnya bisa dirubah  sesuai yg kita inginkan , cara membuatnya menggunakan {}
*/
let obj = {
    nama:'zumala',
    umur:22,
}
console.log(obj)