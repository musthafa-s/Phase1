const BASE_URL = 'http://localhost:5000/api/feeds';

export const fetchFeeds = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching feeds:', error);
    return [];
  }
};

export const addFeedUrl = async (url) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error adding feed URL:', error);
    throw error;
  }
};


export async function fetchFeedByUrl(url) {
    const res = await fetch('http://localhost:5000/api/feeds/preview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
  
    if (!res.ok) throw new Error('Failed to fetch feed preview');
    return await res.json();
  }
  

export const markAsRead = async (itemId) => {
  try {
    const res = await fetch(`${BASE_URL}/read/${itemId}`, {
      method: 'PATCH'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error marking item as read:', error);
    throw error;
  }
};
