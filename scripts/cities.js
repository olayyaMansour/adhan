const cities = [
  { name: "Casablanca-Settat", country: "Morocco", code: "CAS" },
  { name: "Marrakech-Safi", country: "Morocco", code: "MAR" },
  { name: "Mohammadia", country: "Morocco", code: "MOH" },
  { name: "Fès-Meknès", country: "Morocco", code: "FES" },
  { name: "Agadir-Ida-Ou-Tanane", country: "Morocco", code: "AGD" },
  { name: "Rabat-Salé-Kénitra", country: "Morocco", code: "RAB" },
  { name: "Béni Mellal", country: "Morocco", code: "BEM" },
];
export function displayCities() {
  let citiesHTML = '<option value="">Choose a city...</option';
  cities.forEach((city) => {
    citiesHTML += `
    <option value="${city.name}">${city.name}</option>
    `;
  });
  return citiesHTML;
}
