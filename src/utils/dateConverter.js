export function dateConverter (date) {
  const options = { day: "numeric", month: "long", year: "numeric" };  
  return new Date(date).toLocaleDateString("id-ID", options); 
}

export function dateConverterDataOrder (date) {
  return new Date(date).toLocaleDateString("id-ID"); 
}