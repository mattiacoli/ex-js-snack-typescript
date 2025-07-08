/*  Snack1
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
    Se è una stringa: stampala in maiuscolo
    Se è un numero: moltiplicalo per due e stampalo
    Se è un booleano: stampa “Sì” o “No” in base al suo valore
    In tutti gli altri casi: stampa “Tipo non supportato”
 */

const data: unknown = await endpointApi()
if (typeof data === 'string') {
  console.log(data.toUpperCase())
} else if (typeof data === "number") {
  console.log(data * 2);
} else if (typeof data === "boolean") {
  data ? console.log("Si") : console.log("No")
} else if (typeof data === null) {
  console.log("Il dato è vuoto")
} else if (Array.isArray(data)) {
  console.log(data.length);
} else {
  console.log("Tipo non supportato");
}