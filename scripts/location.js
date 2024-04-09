export async function getCityAndCountry(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await axios.get(url);
    const city = response.data.address.city;
    const country = response.data.address.country;
    return { city, country };
  } catch (error) {
    console.error("Error fetching city and country:", error);
    return null;
  }
}
