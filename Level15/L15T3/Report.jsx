import React, { useEffect, useState } from 'react';

const Report = () => {
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./report.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load report.json');
        return res.json();
      })
      .then((data) => setReportData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>⚠️ {error}</p>;
  }

  if (reportData.length === 0) {
    return <p>📄 No file movement report available.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 File Organizer Report</h2>
      <ul>
        {reportData.map((item, index) => (
          <li key={index}>
            <strong>{item.file}</strong> → <em>{item.movedTo}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
