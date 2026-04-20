import { useState, useEffect } from 'preact/hooks';
import type { SensorData, AnalysisData } from '../types';
import { fetchSensors, fetchAnalysis } from '../api/client';
import { SensorPanel } from './SensorPanel';
import { AnalysisPanel } from './AnalysisPanel';
import { ControlsPanel } from './ControlsPanel';

export function App() {
  const [sensors, setSensors] = useState<SensorData | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [imageUrl, setImageUrl] = useState('/api/image');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const [sensorsData, analysisData] = await Promise.all([
        fetchSensors().catch(e => { throw e; }),
        fetchAnalysis(),
      ]);
      
      setSensors(sensorsData);
      setAnalysis(analysisData);
      setImageUrl(`/api/image?t=${Date.now()}`);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="app">
      <SensorPanel data={sensors} loading={loading} />
      
      <main class="main">
        {error && <div class="error-box">{error}</div>}
        
        <div class="hero">
          <img src={imageUrl} alt="Камера теплицы" />
        </div>
        
        <AnalysisPanel data={analysis} />
      </main>
      
      <ControlsPanel />
    </div>
  );
}