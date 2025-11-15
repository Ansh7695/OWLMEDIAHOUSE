import fetch from 'node-fetch';

const BASE = 'http://localhost:4000/api/blogs';

async function run() {
  try {
    console.log('GET list (no status)');
    let res = await fetch(`${BASE}/list`);
    let data = await res.json();
    console.log('List response:', JSON.stringify(data, null, 2).slice(0, 2000));

    if (!data || !data.success || !data.blogs || data.blogs.length === 0) {
      console.log('No blogs to test approve/reject.');
      return;
    }

    const id = data.blogs[0]._id;
    console.log('Testing approve on id:', id);
    res = await fetch(`${BASE}/approve/${id}`, { method: 'PUT' });
    let approveRes = await res.json();
    console.log('Approve response:', approveRes);

    console.log('Testing reject on same id (to flip back)');
    res = await fetch(`${BASE}/reject/${id}`, { method: 'PUT' });
    let rejectRes = await res.json();
    console.log('Reject response:', rejectRes);
  } catch (err) {
    console.error('Test script error:', err);
    process.exit(1);
  }
}

run();
