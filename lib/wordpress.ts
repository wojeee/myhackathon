import axios from 'axios';

const WORDPRESS_API_URL = 'http://localhost/myhackathon/wp-json/wp/v2';

export async function fetchFromWordPress(endpoint: string) {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching from WordPress:', error);
    return null;
  }
}

export async function getEvents() {
  return fetchFromWordPress('events');
}

export async function getMentors() {
  return fetchFromWordPress('mentors');
}

export async function getFAQs() {
  return fetchFromWordPress('faqs');
}