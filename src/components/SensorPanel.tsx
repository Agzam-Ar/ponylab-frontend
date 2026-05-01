import type { SensorData } from '../types';

interface Props {
  data: SensorData | null;
  loading: boolean;
}

export function SensorPanel({ data, loading }: Props) {
  if (loading) {
    return (
      <aside class="panel glass">
        <h1>Smart Greenhouse</h1>
        <div class="sensor-row"><span class="sensor-label">Загрузка...</span></div>
      </aside>
    );
  }

  if (!data) {
    return (
      <aside class="panel glass">
        <h1>Smart Greenhouse</h1>
        <div class="sensor-row"><span class="sensor-label">Нет данных</span></div>
      </aside>
    );
  }

  return (
    <aside class="panel glass">
      <h1>Smart Greenhouse</h1>

      <div class="sensor-row">
        <span class="sensor-label">pH</span>
        <span class="sensor-value">{data.ph.toFixed(2)}</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">EC</span>
        <span class="sensor-value">{data.ec.toFixed(2)} мСм/см</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">T р-ра</span>
        <span class="sensor-value">{data.temp_solution.toFixed(1)}°C</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">T возд</span>
        <span class="sensor-value">{data.temp_air.toFixed(1)}°C</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">H возд</span>
        <span class="sensor-value">{data.humidity_air.toFixed(0)}%</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">CO2</span>
        <span class="sensor-value">{data.co2} ppm</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">Освещенность</span>
        <span class="sensor-value">{data.light.toFixed(1)} лк</span>
      </div>
      <div class="sensor-row">
        <span class="sensor-label">Уровень</span>
        <span class={`pill ${data.level === 'норма' ? '' : 'warning'}`}>{data.level}</span>
      </div>

      {data.errors && data.errors.length > 0 && (
        <div class="error-box" style={{ marginTop: '1rem' }}>
          <strong>Ошибки:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
            {data.errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
