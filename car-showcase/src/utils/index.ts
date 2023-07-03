const apiUrl = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export const fetchCars = async () => {
  console.log(process.env.API_KEY);
  const headers = {
    "X-RapidAPI-Key": process.env.API_KEY as string,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const resp = await fetch(`${apiUrl}/?model=Corolla`, { headers });
  const result = await resp.json();

  return result;
};
