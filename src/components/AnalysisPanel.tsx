import type { AnalysisData } from '../types';

interface Props {
  data: AnalysisData | null;
}

export function AnalysisPanel({ data }: Props) {
  if (!data) {
    return (
      <div class="analysis-grid">
        <div class="analysis-card">
          <h3>Анализ растения</h3>
          <div class="analysis-row"><span>Загрузка...</span></div>
        </div>
        <div class="analysis-card">
          <h3>Рекомендации</h3>
          <div class="analysis-row"><span>—</span></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="analysis-grid">
        <div class="analysis-card">
          <h3>Анализ растения</h3>
          <div class="analysis-row">
            <span>Стадия</span>
            <span class="pill">{data.stage}</span>
          </div>
          <div class="analysis-row">
            <span>Здоровье</span>
            <span class="pill">{Math.round(data.health * 100)}%</span>
          </div>
          <div class="analysis-row">
            <span>Состояние</span>
            <span class={`pill ${data.disease === 'healthy' ? '' : 'error'}`}>
              {data.disease}
            </span>
          </div>
        </div>

        <div class="analysis-card">
          <h3>Рекомендуемые параметры</h3>
          <div class="analysis-row">
            <span>Температура</span>
            <span>{data.params.temp}°C</span>
          </div>
          <div class="analysis-row">
            <span>Влажность</span>
            <span>{data.params.humidity}%</span>
          </div>
          <div class="analysis-row">
            <span>EC</span>
            <span>{data.params.ec}</span>
          </div>
          <div class="analysis-row">
            <span>pH</span>
            <span>{data.params.ph}</span>
          </div>
        </div>
      </div>
    </>
  );
}