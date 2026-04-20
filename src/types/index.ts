export interface SensorData {
  ph: number;
  ec: number;
  temp_solution: number;
  temp_air: number;
  humidity_air: number;
  co2: number;
  light: number;
  level: string;
  uptime: number;
  wifi: number;
  description: string;
  errors: string[];
}

export interface AnalysisData {
  stage: string;
  health: number;
  disease: string;
  params: {
    temp: number;
    humidity: number;
    ec: number;
    ph: number;
  };
}

export interface ControlState {
  id: string;
  label: string;
  on: boolean;
  auto: boolean;
}