//dato primitivo
//let usern = 'jisus';
//let age = 17;
//let isActive = true;
//let hobbies = ['play videogames', 'programming', 'basketball']
//console.log(typeof (usern));
//console.log(usern);
//console.log(typeof (age));
//console.log(age);
//console.log(typeof (isActive));
//console.log(isActive);
//console.log(typeof (hobbies));
//console.log(hobbies [1]); 


//let person = {
    //name: 'jisus',
    //age: 17,
    //isActive: true,
    //hobbies: ['reading', 'programming', 'basquetball',]
//};

//console.log(person);

//console.log('mi nombre es ' + person.name);
//console.log('tengo ' + person.age + ' años');
//console.log('mis pasatiempos son ' + person.hobbies )
//console.log('estoy activo? '+ person.isActive )

//console.table(person)




let dayz = {
    personaje: 'yo',
    entrasaunacasa: true,
    mataszombies: true,
    cuantoszombies: 3,
    inventario: ['comida', 'agua', 'balas', 'items'],
    armas: {
        escopeta: 'cargada',
        pistola: 'semivacia',
    }
}
console.log(dayz);

console.log('vas por la calle y entras a una casa '+ dayz.entras+ 'y decides lootear' );
console.log('al salir ves muchos zombies y decides matarlos ' + dayz.matas );
console.log('y matas a ' +dayz.cuantos + 'zombies' );
console.log('decides checar tu inventario '+ dayz.inventario );
console.log('checas tu arma ' + dayz.armas );

console.table(dayz)