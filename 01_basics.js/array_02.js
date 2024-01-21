const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros)

 const myhero = [...marvel_heros,...dc_heros]
 console.log(myhero);

//  console.log(marvel_heros);

//  console.log(marvel_heros[3]);
//  console.log(marvel_heros[3][2]);
 const allHeros = marvel_heros.concat(dc_heros)
  console.log(allHeros);

  const array = [1,2,3,4,5,[6,7,10,[8,9]]]
  console.log(array[5][3]);

  const real_array = array.flat(Infinity)
console.log(real_array); 