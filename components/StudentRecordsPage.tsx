import React, { useEffect, useState } from 'react';


interface StudentRecord {
  date: string;
  score: number;
  details: string;
}


interface StudentRecordsPageProps {
  onReturn?: () => void;
}

const StudentRecordsPage: React.FC<StudentRecordsPageProps> = ({ onReturn }) => {
  const [records, setRecords] = useState<StudentRecord[]>([]);

  useEffect(() => {
    function getCookie(name: string): string | null {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
      return null;
    }
    const cookieData = getCookie('studentRecords');
    if (cookieData) {
      try {
        setRecords(JSON.parse(decodeURIComponent(cookieData)));
      } catch {
        setRecords([]);
      }
    }
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Registros del Estudiante</h2>
      {records.length === 0 ? (
        <p>No se encontraron registros.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Puntaje</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, idx) => (
              <tr key={idx}>
                <td>{rec.date}</td>
                <td>{rec.score}</td>
                <td>{rec.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        style={{ marginTop: 24, padding: '8px 20px', borderRadius: 8, background: '#f3f3f3', border: '1px solid #ccc', cursor: 'pointer', fontWeight: 600 }}
        onClick={onReturn}
      >
        Volver
      </button>
    </div>
  );
};

export default StudentRecordsPage;
