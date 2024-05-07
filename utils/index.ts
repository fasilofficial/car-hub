export const fetchCars = async () => {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
  const headers = {
    "X-RapidAPI-Key": "9195255473msh062968d23455a1cp1c7c64jsn151f758d0cbb",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(`${url}?model=corolla`, { headers });
  const result = await response.json();

  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
