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
export interface RecommendedParams {
    light_duration: number;
    irrigation_pulses: number;
    irrigation_sec: number;
    temp_day: number;
    temp_night: number;
    humidity_day: number;
    humidity_night: number;
    co2_target: number;
    ec: number;
    ph: number;
}

export interface AnalysisData {
    growth_stage: string;
    health: number;
    disease: string;
    recommended_params: RecommendedParams;
    rationale: string;
}

export interface ControlState {
    id: string;
    label: string;
    on: boolean;
    auto: boolean;
}
